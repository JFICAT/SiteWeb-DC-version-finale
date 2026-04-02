# Déploiement sur GitHub Pages

Le workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) construit le site avec Vite et le publie automatiquement à chaque push sur `preprod`, `main` ou `master`.

## Configuration du dépôt GitHub (une fois)

1. **Settings → Pages**
   - **Build and deployment** : source **GitHub Actions** (pas « Deploy from a branch »).

2. **Settings → Actions → General**
   - **Workflow permissions** : cocher **Read and write permissions** si besoin, ou laisser les permissions par défaut du workflow (le fichier YAML définit déjà `pages: write` et `id-token: write` au niveau du workflow).

3. Après le premier déploiement réussi, l’URL du site apparaît dans l’onglet **Environments** (`github-pages`) et dans l’exécution du workflow.

## URL du site

- Dépôt **projet** : `https://<utilisateur>.github.io/<nom-du-repo>/`
- Dépôt **site utilisateur** (`<utilisateur>.github.io`) : `https://<utilisateur>.github.io/` (le workflow fixe automatiquement `VITE_BASE=/`).

## Fichiers PDF

Placez les PDF référencés par la maquette à la racine du dossier [`public/`](public/) (ex. `public/programme_formation_ia.pdf`). Ils sont copiés tels quels dans `dist` au build.

## Branche de déploiement

Le déploiement se déclenche sur les branches `preprod`, `main` et `master`. Pour ne déployer que depuis `preprod`, retirez les autres noms dans `.github/workflows/deploy-pages.yml` sous `on.push.branches`.

---

## CI/CD complète pour un déploiement VPS sécurisé (recommandé)

Cette configuration ajoute deux workflows GitHub Actions :

- `CI - Build Check` (`.github/workflows/ci.yml`) : vérifie que le site compile à chaque push/PR.
- `CD - Deploy VPS (SSH)` (`.github/workflows/deploy-vps.yml`) : déploie automatiquement sur le VPS lors d'un push sur `main`, **uniquement si le build passe**.

### Préparer le VPS (une fois)

1. Créer le dossier de l'application (exemple) :

   ```bash
   mkdir -p /home/ubuntu/Applications/SiteWebDataConforme/SiteWeb-DC-version-finale
   ```

2. Copier `docker-compose.yml`, `Dockerfile`, `Dockerfile.api`, `docker/nginx.conf`, etc.  
   (Le workflow le fera automatiquement ensuite via `rsync`.)

3. Créer le fichier `.env` sur le VPS (ce fichier n'est jamais envoyé par GitHub Actions) :

   ```bash
   cd /home/ubuntu/Applications/SiteWebDataConforme/SiteWeb-DC-version-finale
   cp .env.exemple .env
   # Renseigner les variables SMTP
   ```

4. Vérifier que Docker + Compose sont installés et que le réseau `testapp` existe :

   ```bash
   docker network create testapp || true
   ```

### Créer la clé SSH dédiée à GitHub Actions

Sur votre machine locale :

```bash
ssh-keygen -t ed25519 -C "github-actions-dataconforme" -f ~/.ssh/github_actions_dataconforme
```

Vous obtenez :

- clé privée : `~/.ssh/github_actions_dataconforme`
- clé publique : `~/.ssh/github_actions_dataconforme.pub`

### Autoriser cette clé sur le VPS

Copier le contenu de la clé publique dans `~/.ssh/authorized_keys` de l'utilisateur de déploiement sur le VPS :

```bash
cat ~/.ssh/github_actions_dataconforme.pub
```

Puis, sur le VPS (utilisateur cible, ex: `deploy`) :

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
echo "COLLER_ICI_LA_CLE_PUBLIQUE" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Générer la valeur `SSH_KNOWN_HOSTS`

Depuis votre machine locale :

```bash
ssh-keyscan -H votre-domaine-ou-ip
```

Copiez la ligne complète retournée (commence par le nom d'hôte/IP), elle sera stockée dans un secret GitHub.

### Créer les secrets GitHub (pas à pas)

Dans GitHub :

1. Ouvrir le dépôt → **Settings**.
2. Menu gauche → **Secrets and variables** → **Actions**.
3. Onglet **Secrets** → **New repository secret**.
4. Créer les secrets suivants :

- `SSH_HOST` : domaine ou IP du VPS
- `SSH_PORT` : port SSH (souvent `22`)
- `SSH_USER` : utilisateur SSH de déploiement (ex: `deploy`)
- `SSH_PRIVATE_KEY` : contenu complet de `~/.ssh/github_actions_dataconforme` (clé privée)
- `SSH_KNOWN_HOSTS` : sortie complète de `ssh-keyscan -H votre-domaine-ou-ip`
- `SSH_TARGET_DIR` : dossier d'application sur le VPS (ex: `/home/ubuntu/Applications/SiteWebDataConforme/SiteWeb-DC-version-finale`)

### Protéger la branche pour les non-développeurs (très important)

Dans GitHub :

1. **Settings** → **Branches** → **Add rule**.
2. Branch name pattern : `main`.
3. Activer :
   - **Require a pull request before merging**
   - **Require approvals** (minimum 1)
   - **Require status checks to pass before merging**
4. Dans la liste des checks requis, sélectionner `Build (Node 22)`.

Avec cette règle, une modification ne peut pas casser la prod : le merge est bloqué si le build échoue.

### Activer une validation manuelle avant déploiement (option recommandé)

Le workflow de CD utilise l'environnement GitHub `production`.

1. **Settings** → **Environments** → **New environment** → `production`.
2. Ajouter un ou plusieurs **Required reviewers**.

Résultat : même après merge sur `main`, GitHub attend une approbation avant d'exécuter le déploiement.

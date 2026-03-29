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

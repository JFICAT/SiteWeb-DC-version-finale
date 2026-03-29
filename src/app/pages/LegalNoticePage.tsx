import { Navbar, Footer } from "../App";
import { ScrollText, Building2, Scale, BookOpen, HardDrive, Shield, Users, Lock } from "lucide-react";

export default function LegalNoticePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="legal" onNavigate={onNavigate} />
      
      <section className="relative w-full pt-[140px] pb-24 px-8 border-b border-[#E5E9F0]" style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #FFFFFF 100%)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[rgba(0,71,186,0.1)] text-[#0047BA] font-['Inter:Semi_Bold',sans-serif] text-[14px] mb-6">
            Informations Légales
          </div>
          <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[48px] mb-6 leading-tight">Mentions Légales</h1>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5A6C7D]">
            Transparence et informations réglementaires concernant l'éditeur du site Data Conforme.
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-8">
        <div className="max-w-[800px] mx-auto space-y-12">
           
           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <ScrollText className="w-6 h-6 text-[#00A9C1]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">Définitions</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p><strong>Client :</strong> tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.</p>
               <p><strong>Contenu :</strong> Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.</p>
               <p><strong>Informations clients :</strong> Ci-après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par DATA CONFORME pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</p>
               <p><strong>Utilisateur :</strong> Internaute se connectant, utilisant le site susnommé.</p>
               <p><strong>Informations personnelles :</strong> « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
               <p>Les termes « données à caractère personnel », « personne concernée », « sous-traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <Building2 className="w-6 h-6 text-[#0047BA]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">1. Présentation du site internet</h2>
             </div>
             <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed mb-4">
               En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet <a href="https://dataconforme.fr" className="text-[#00A9C1] hover:underline">https://dataconforme.fr</a> l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
             </p>
             <ul className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-2">
               <li><strong>Propriétaire :</strong> DATA CONFORME est une Société par Actions Simplifiée (SAS), représentée par Jérôme FICAT.</li>
               <li><strong>Responsable de la rédaction :</strong> Jérôme FICAT</li>
               <li><strong>Adresse :</strong> 63 rue Jacques Teulié 31150 FENOUILLET</li>
               <li><strong>N° SIRET :</strong> 939 743 225 R.C.S. Toulouse</li>
               <li><strong>Webmaster :</strong> Jérôme FICAT</li>
               <li><strong>Hébergeur :</strong> O2 switch, Chem. des Pardiaux, 63000 Clermont-Ferrand</li>
               <li><strong>Délégué à la protection des données :</strong> Jérôme FICAT – <a href="mailto:rgpd@dataconforme.com" className="text-[#00A9C1] hover:underline">rgpd@dataconforme.com</a></li>
             </ul>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <Scale className="w-6 h-6 text-[#00A9C1]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">2. Conditions générales d’utilisation du site et des services proposés</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p>Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>
               <p>L’utilisation du site <a href="https://www.dataconforme.fr" className="text-[#00A9C1] hover:underline">https://www.dataconforme.fr</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.</p>
               <p>Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par DATA CONFORME, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site web est mis à jour régulièrement par le responsable de publication. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <BookOpen className="w-6 h-6 text-[#0047BA]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">3. Description des services fournis</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p>Le site internet a pour objet de fournir une information concernant l’ensemble des activités de la société DATA CONFORME.</p>
               <p>DATA CONFORME s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
               <p>Toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <HardDrive className="w-6 h-6 text-[#00A9C1]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">4. Limitations contractuelles sur les données techniques</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p>Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.</p>
               <p>Le site <a href="https://www.dataconforme.fr" className="text-[#00A9C1] hover:underline">https://www.dataconforme.fr</a> est hébergé chez un prestataire français, et donc situé sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>
               <p>L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.</p>
               <p>DATA CONFORME et l’hébergeur O2switch ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie liée notamment à l’encombrement du réseau empêchant l’accès au serveur.</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <Shield className="w-6 h-6 text-[#0047BA]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">5. Propriété intellectuelle et contrefaçons</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p>DATA CONFORME est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons.</p>
               <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : DATA CONFORME.</p>
               <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <Users className="w-6 h-6 text-[#00A9C1]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">6. Limitations de responsabilité</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p>DATA CONFORME agit en tant qu’éditeur du site et est responsable de la qualité et de la véracité du Contenu qu’il publie.</p>
               <p>DATA CONFORME ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet <a href="https://www.dataconforme.fr/" className="text-[#00A9C1] hover:underline">https://www.dataconforme.fr/</a>, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>
               <p>DATA CONFORME ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site. Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. DATA CONFORME se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.</p>
               <p>Le cas échéant, DATA CONFORME se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <Lock className="w-6 h-6 text-[#0047BA]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">7. Protection des données à caractère personnel</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p><strong>Les activités de traitement opérées sur le site internet :</strong></p>
               <ul className="list-disc pl-5 space-y-2">
                 <li>Gestion des contacts par courrier électronique, par téléphone ou par formulaire</li>
                 <li>Promotion de l’entité</li>
               </ul>
               <p>Nous n’utilisons aucun cookie (ou traceur) non essentiel au bon fonctionnement du site. Nous respectons les recommandations de la CNIL SAN-2020-003 du 28 juillet 2020.</p>
               <p>Pour plus d’information sur notre politique de protection des données, merci de consulter notre page dédiée en cliquant <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }} className="text-[#00A9C1] hover:underline">ici</a>.</p>
             </div>
           </div>
           
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

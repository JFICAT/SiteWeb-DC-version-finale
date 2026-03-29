import { Navbar, Footer } from "../App";
import { ShieldCheck, Users, Download, FileCheck, HardDrive, Clock, Shield, Scale } from "lucide-react";

export default function PrivacyPolicyPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="privacy" onNavigate={onNavigate} />
      
      <section className="relative w-full pt-[140px] pb-24 px-8 border-b border-[#E5E9F0]" style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #FFFFFF 100%)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[rgba(0,169,193,0.1)] text-[#00A9C1] font-['Inter:Semi_Bold',sans-serif] text-[14px] mb-6">
            Protection des données
          </div>
          <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[48px] mb-6 leading-tight">Politique de Confidentialité</h1>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5A6C7D]">
            Transparence totale sur la collecte, l'utilisation et la protection de vos données personnelles par Data Conforme.
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-8">
        <div className="max-w-[900px] mx-auto space-y-8">
          
          {/* I - Objectifs */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#00A9C1]" />
              </div>
              <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">I – Objectifs de notre politique de confidentialité</h2>
            </div>
            <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
              <p>Cette Politique de Confidentialité s’applique à tous les services, produits, et applications, proposés par Data conforme.</p>
              <div className="bg-[#F8FAFB] p-6 rounded-xl border border-[#E5E9F0]">
                <p className="font-['Manrope:Bold',sans-serif] text-[#0A192F] mb-2 uppercase text-[12px] tracking-wider">Nos coordonnées</p>
                <p><strong>DATA CONFORME :</strong> Société par Actions Simplifiée (SAS)<br />
                N° SIRET : 939 743 225 R.C.S. Toulouse<br />
                Adresse : 63 rue Jacques Teulié 31150 FENOUILLET<br />
                Courriel : <a href="mailto:rgpd@dataconforme.com" className="text-[#00A9C1] hover:underline">rgpd@dataconforme.com</a></p>
              </div>
              <p>Nous nous assurons que nos mesures techniques et organisationnelles respectent vos droits relatifs à la protection des données (RGPD, Directive UE n°2002/58, Loi Informatique et Libertés). Lorsque vous nous fournissez des données, vous nous autorisez à les recueillir pour répondre à nos obligations contractuelles, au titre de notre intérêt légitime ou sur la base de votre consentement.</p>
            </div>
          </div>

          {/* II - Quel type d'informations */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-[#0047BA]" />
              </div>
              <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">II – Quel type d’informations collectons nous ?</h2>
            </div>
            <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
              <p>Nous recueillons et traitons actuellement les informations suivantes :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Dans le cadre de nos formulaires :</strong> Noms, prénoms, nom de votre société, courriel professionnel, téléphone.</li>
                <li><strong>Dans le cadre de notre relation contractuelle :</strong> Adresse professionnelle, SIRET, et coordonnées de contact direct.</li>
              </ul>
            </div>
          </div>

          {/* III & IV - Obtention & Traitement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                  <Download className="w-6 h-6 text-[#00A9C1]" />
                </div>
                <h2 className="font-['Manrope:Bold',sans-serif] text-[20px] text-[#0A192F]">III – Comment obtenons-nous les données ?</h2>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed">
                La plupart des données nous sont fournies directement par vous lorsque vous souhaitez des compléments d’information, un devis, ou souscrire à un contrat de service.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                  <FileCheck className="w-6 h-6 text-[#0047BA]" />
                </div>
                <h2 className="font-['Manrope:Bold',sans-serif] text-[20px] text-[#0A192F]">IV – Activités de traitement</h2>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed">
                Gestion des contacts, promotion de l’entité, analyse statistique, gestion de la clientèle et des prospects, pilotage de la conformité via logiciel métier RGPD (SAAS).
              </p>
            </div>
          </div>

          {/* V, VI, VII - Stockage & Sécurité */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <HardDrive className="w-5 h-5 text-[#00A9C1]" />
                  <h3 className="font-['Manrope:Bold',sans-serif] text-[#0A192F]">V – Stockage</h3>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#5A6C7D]">Serveurs sécurisés situés en France ou dans un pays adéquat au RGPD.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#00A9C1]" />
                  <h3 className="font-['Manrope:Bold',sans-serif] text-[#0A192F]">VI – Conservation</h3>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#5A6C7D]">Respect des obligations légales. Suppression définitive après expiration du délai.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-[#0047BA]" />
                  <h3 className="font-['Manrope:Bold',sans-serif] text-[#0A192F]">VII – Violations</h3>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#5A6C7D]">Information de la CNIL au plus tard dans les 48h en cas de faille constatée.</p>
              </div>
            </div>
          </div>

          {/* VIII - Vos droits */}
          <div className="bg-[#0A192F] rounded-2xl p-8 border border-[#1A293F] shadow-xl text-white">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full bg-[#00A9C1] flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Manrope:Bold',sans-serif] text-[24px]">VIII – Vos droits sur les données</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 font-['Inter:Regular',sans-serif] text-white/80 text-[15px]">
              <div className="space-y-4">
                <p><strong>Droit d’accès :</strong> Demander des copies de vos données personnelles.</p>
                <p><strong>Droit à la rectification :</strong> Corriger ou compléter des informations inexactes.</p>
                <p><strong>Droit à l’effacement :</strong> Demander la suppression de vos données.</p>
              </div>
              <div className="space-y-4">
                <p><strong>Droit à la restriction :</strong> Limiter le traitement dans certaines circonstances.</p>
                <p><strong>Droit d’opposition :</strong> Vous opposer au traitement de vos données.</p>
                <p><strong>Droit à la portabilité :</strong> Transférer vos données à une autre organisation.</p>
              </div>
            </div>
            <p className="mt-8 pt-8 border-t border-white/10 text-white/60 text-[14px] italic">
              Pour exercer vos droits, contactez-nous à <a href="mailto:rgpd@dataconforme.com" className="text-[#00A9C1] hover:underline font-bold">rgpd@dataconforme.com</a>. Une réponse vous sera apportée sous un mois.
            </p>
          </div>

          {/* IX - Réclamation */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                <FileCheck className="w-6 h-6 text-[#00A9C1]" />
              </div>
              <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">IX – Réclamation auprès de la CNIL</h2>
            </div>
            <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une plainte à la CNIL : 3 Place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07 ou sur <a href="http://www.cnil.fr" className="text-[#00A9C1] hover:underline">www.cnil.fr</a>.
            </p>
          </div>

          {/* X - Mise à jour */}
          <div className="text-center pt-8">
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#5A6C7D]">
              Version mise à jour le <strong>11 février 2026</strong>. Toute modification sera portée à la connaissance du public.
            </p>
          </div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

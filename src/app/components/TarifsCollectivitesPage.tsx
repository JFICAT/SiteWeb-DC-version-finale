import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Navbar, Footer } from "../App";

const plan = {
  id: "serenite-collectivite",
  title: "Sérénité Collectivité",
  subtitle: "Protection maximale",
  monthlyPrice: 950,
  stripeLink: "https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30", // Using contact link as placeholder if no stripe link provided
  ctaLabel: "Choisir Sérénité Collectivité",
  features: [
    "Toutes les fonctionnalités du pack Sérénité",
    "Conduite du plan cybersécurité et conformité avancée",
    "Présentiel dans l'entreprise",
    "Rédaction de PSSI, PRA, PCA, Chartes",
    "Évaluation de l'usage de l'intelligence artificielle",
    "2 sensibilisations d'équipes / an",
    "Simulations de phishing et tests d'ingénierie sociale",
    "Contrôle illimité des sous-traitants",
    "Cellule de crise en cas d'incident cyber",
  ],
};

export default function TarifsCollectivitesPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar onNavigate={onNavigate || (() => {})} />
      
      {/* Header */}
      <div className="text-center pt-[180px] pb-16 px-8">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-2 bg-[#F0F7FF] border border-[#0047BA]/10 px-5 py-2 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-[#00A9C1]" />
          <span className="font-['Inter:Semi_Bold',sans-serif] text-[#0047BA] text-[13px] uppercase tracking-widest">
            Offre Collectivités — Data Conforme
          </span>
        </div>

        <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[48px] lg:text-[56px] leading-tight mb-6">
          Sérénité Collectivité
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[18px] lg:text-[20px] max-w-[700px] mx-auto leading-relaxed">
          Un accompagnement premium dédié aux collectivités territoriales pour une conformité totale et une cybersécurité renforcée.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-[1000px] mx-auto px-8 pb-32">
        <div className="flex justify-center">
          <div 
            className="w-full max-w-[600px] relative flex flex-col rounded-[32px] overflow-hidden border border-[#0047BA]/10 shadow-[0_32px_64px_-16px_rgba(0,71,186,0.08)] bg-white"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0047BA] to-[#00A9C1]" />

            <div className="p-10 lg:p-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-[32px] text-[#0A192F] mb-2">
                    {plan.title}
                  </h2>
                  <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[15px]">
                    {plan.subtitle}
                  </p>
                </div>
                <div className="bg-[#82E600]/10 text-[#2D5A00] text-[12px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Premium
                </div>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2 mb-10">
                <span className="font-['Manrope:Extra_Bold',sans-serif] text-[64px] leading-none text-[#0A192F]">
                  {plan.monthlyPrice}€
                </span>
                <span className="text-[#5A6C7D] font-['Inter:Medium',sans-serif] text-[18px] mb-3">
                  / mois HT
                </span>
              </div>

              <a
                href={plan.stripeLink}
                className="block w-full py-[18px] rounded-[16px] font-['Inter:Semi_Bold',sans-serif] text-[18px] text-center no-underline transition-all duration-300 cursor-pointer bg-[#0A192F] text-white hover:bg-[#0047BA] hover:shadow-xl hover:-translate-y-0.5"
              >
                {plan.ctaLabel}
              </a>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0047BA]/10 to-transparent" />

            <div className="p-10 lg:p-12 bg-[#F8FAFC]">
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[13px] uppercase tracking-widest mb-8">
                Inclus dans votre accompagnement :
              </p>
              <ul className="grid grid-cols-1 gap-5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-white border border-[#00A9C1]/20 flex items-center justify-center mt-0.5 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#00A9C1]" />
                    </div>
                    <span className="font-['Inter:Regular',sans-serif] text-[15px] text-[#42526E] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-[#F0F7FF] rounded-[24px] p-8 md:p-10 border border-[#0047BA]/5">
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl">
              🤝
            </div>
            <div className="text-left">
              <h3 className="font-['Manrope:Bold',sans-serif] text-[#0A192F] text-[20px] mb-2">
                Besoin d'un devis personnalisé ?
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[15px] max-w-[500px]">
                Nos experts sont à votre disposition pour adapter cette offre aux spécificités de votre collectivité.
              </p>
            </div>
            <a 
              href="/contact"
              className="mt-4 md:mt-0 px-8 py-4 bg-white text-[#0A192F] font-['Inter:Semi_Bold',sans-serif] rounded-[12px] border border-[#0047BA]/10 hover:bg-[#F8FAFC] transition-all cursor-pointer whitespace-nowrap shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                onNavigate && onNavigate('contact');
              }}
            >
              Contacter un expert
            </a>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

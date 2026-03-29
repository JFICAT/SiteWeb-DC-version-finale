import React, { useState, useRef, TouchEvent } from 'react';
import { 
  ChevronLeft, ChevronRight, Search, Building2, Server, BookOpen, Brain, 
  Shield, Flag, UserCheck, LayoutDashboard, FileText, Scale, Bot, Globe, 
  Settings2, MessageSquare, TrendingUp, MonitorSmartphone, ShieldCheck, 
  Award, Landmark, Network 
} from 'lucide-react';

interface ServiceCardData {
  icon: any;
  title: string;
  text: string;
  button: string;
  link?: string;
}

interface SlideData {
  id: number;
  theme: string;
  accent: string;
  title: string;
  subtitle: string;
  isDark?: boolean;
  cards: ServiceCardData[];
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    theme: '#E6F1FB',
    accent: '#0047BA', 
    title: "Audit & Mise en Conformité RGPD",
    subtitle: "Identifiez vos risques, protégez vos données, pérennisez votre organisation",
    cards: [
      {
        icon: Search,
        title: "Conformité TPE / Solo",
        text: "Pour les structures de moins de 5 salariés : formation intégrée, registre des traitements, registre des sous-traitants, identification des risques. Devenez autonome sur votre RGPD.",
        button: "Nous consulter"
      },
      {
        icon: Building2,
        title: "Audit initial PME",
        text: "Audit complet pour les PME : sensibilisation de la direction, analyse du système d'information, interview de vos services, établissement de tous les registres obligatoires, rapport d'audit et plan d'action priorisé.",
        button: "Nous consulter"
      },
      {
        icon: Server,
        title: "Audit de votre SI",
        text: "Nos juristes comprennent votre réalité technique. Nous analysons vos serveurs, réseaux, applications et sous-traitants pour identifier les vraies failles — pas seulement les obligations documentaires.",
        button: "Nous consulter"
      }
    ]
  },
  {
    id: 2,
    theme: '#E1F5EE',
    accent: '#00A9C1',
    title: "Formations & Sensibilisations",
    subtitle: "Certifié Qualiopi — Finançable OPCO et plan national Osez l'IA de Bpifrance",
    cards: [
      {
        icon: BookOpen,
        title: "Formation RGPD",
        text: "Comprenez vos obligations légales et devenez autonome dans la gestion de vos données. Disponible en présentiel et en e-learning. À l'issue du parcours, possibilité de confier son RGPD à Data Conforme comme DPO.",
        button: "Voir la formation"
      },
      {
        icon: Brain,
        title: "Sensibilisation IA responsable",
        text: "Préparez vos collaborateurs aux enjeux de l'intelligence artificielle : biais algorithmiques, transparence, droits des personnes, éthique numérique et souveraineté des données.",
        button: "Voir la formation"
      },
      {
        icon: Shield,
        title: "Cybersécurité",
        text: "Formez vos équipes aux bonnes pratiques cyber : phishing, mots de passe, gestion des incidents, réflexes en cas de violation. Présentiel et e-learning disponibles.",
        button: "Voir la formation"
      },
      {
        icon: Flag,
        title: "AI Act — Conformité IA",
        text: "Maîtrisez le règlement européen sur l'IA : classification des risques IA, obligations documentaires, gouvernance IA, culture IA obligatoire depuis février 2025. Formation concrète et opérationnelle.",
        button: "Voir la formation"
      }
    ]
  },
  {
    id: 3,
    theme: '#EEEDFE',
    accent: '#5E51E2',
    title: "DPO Externalisé",
    subtitle: "Un Délégué à la Protection des Données certifié, déclaré à la CNIL, qui veille pour vous",
    cards: [
      {
        icon: UserCheck,
        title: "Nomination à la CNIL",
        text: "Data Conforme est nommé Délégué à la Protection des Données auprès de la CNIL. Vous bénéficiez d'une hotline juridique et RGPD dédiée, d'une assistance en cas de violation de données ou de demande de droits.",
        button: "Rdv de 30 minutes gratuit",
        link: "#dpo-pricing-card"
      },
      {
        icon: LayoutDashboard,
        title: "Pilotage logiciel",
        text: "Visualisez vos registres obligatoires, suivez votre plan d'actions et consultez vos comptes rendus de conformité en temps réel via une plateforme dédiée. Le principe d'accountability RGPD est respecté.",
        button: "Voir les fonctionnalités"
      },
      {
        icon: FileText,
        title: "Documentation & Assistance",
        text: "Rédaction et mise à jour de vos politiques de confidentialité, clauses contractuelles, avenants de sous-traitance, analyses d'impact (PIA), gestion des violations de données et des demandes de droits RGPD.",
        button: "Nous consulter"
      }
    ]
  },
  {
    id: 4,
    theme: '#FAECE7',
    accent: '#E06B4D',
    title: "Votre IA Conforme & Souveraine",
    subtitle: "Déployez l'IA en respectant la réglementation, votre éthique et la souveraineté de vos données",
    cards: [
      {
        icon: Scale,
        title: "Conformité AI Act",
        text: "Le règlement européen sur l'IA est en vigueur. Nous vous accompagnons pour classifier vos systèmes IA, documenter vos obligations, préparer votre gouvernance IA et assurer votre conformité progressive.",
        button: "Découvrir"
      },
      {
        icon: Bot,
        title: "RGPD & Systèmes IA",
        text: "Vos outils IA collectent et traitent des données personnelles. Nous auditons leur conformité RGPD, rédigeons les documents obligatoires, évaluons les risques algorithmiques et gérons les droits des personnes.",
        button: "Nous consulter"
      },
      {
        icon: Globe,
        title: "Éthique & Souveraineté",
        text: "Nous intégrons à chaque mission les enjeux de souveraineté des données françaises et européennes, d'indépendance technologique et de transparence algorithmique. Une IA performante repose sur des valeurs solides.",
        button: "Notre approche"
      }
    ]
  },
  {
    id: 5,
    theme: '#131B2D', // Tech/dark style for Fabrik01 as requested in final note
    accent: '#00A9C1',
    isDark: true,
    title: "Développement IA & Automatisation Souveraine",
    subtitle: "Construisez votre IA sur mesure, hébergée sur vos serveurs — sans dépendance au cloud américain",
    cards: [
      {
        icon: Server,
        title: "IA locale & souveraine",
        text: "Déployez la puissance de l'IA directement sur vos serveurs ou vos postes de travail. Vos données ne quittent jamais votre infrastructure. Idéal pour les secteurs sensibles, les données confidentielles et les enjeux RGPD critiques.",
        button: "Découvrir"
      },
      {
        icon: Settings2,
        title: "Automatisation de workflows",
        text: "Libérez vos équipes des tâches répétitives grâce à des workflows intelligents intégrés à vos outils existants. Suppression des erreurs, synchronisation des systèmes, organisation plus fluide et plus rapide.",
        button: "Découvrir"
      },
      {
        icon: MessageSquare,
        title: "Agents IA conversationnels",
        text: "Déployez des assistants IA capables de comprendre, répondre et guider vos utilisateurs en temps réel. Connectés à vos outils, ils réduisent la charge du support et améliorent votre réactivité commerciale.",
        button: "Découvrir"
      },
      {
        icon: TrendingUp,
        title: "Analyse prédictive",
        text: "Anticipez l'avenir avec des modèles IA capables de prévoir ventes, flux, demandes, charges et comportements clients. Décisions plus rapides, mieux fondées, directement exploitables par vos équipes.",
        button: "Découvrir"
      },
      {
        icon: MonitorSmartphone,
        title: "CRM & Apps métiers",
        text: "Nous concevons ou optimisons des CRM connectés, automatisés et centrés sur vos usages réels. Portails clients, plateformes métiers, systèmes internes : des outils fluides, fiables et intégrant nativement l'IA.",
        button: "Découvrir"
      }
    ]
  },
  {
    id: 6,
    theme: '#FBEAF0',
    accent: '#D34A72',
    title: "Réglementations & Normes",
    subtitle: "RGPD, NIS2, ISO 27001, DORA : nous suivons toutes les évolutions pour rester à vos côtés",
    cards: [
      {
        icon: ShieldCheck,
        title: "Directive NIS 2",
        text: "NIS 2 élargit les obligations de cybersécurité à des milliers d'entreprises françaises, avec des sanctions significatives. Nous évaluons votre périmètre, votre maturité et vous aidons à prendre les mesures nécessaires.",
        button: "En savoir plus"
      },
      {
        icon: Award,
        title: "ISO 27001",
        text: "L'ISO 27001 définit les exigences pour un Système de Management de la Sécurité de l'Information (SMSI). Nous vous accompagnons dans votre démarche de certification, de la phase d'audit au suivi annuel.",
        button: "En savoir plus"
      },
      {
        icon: Landmark,
        title: "DORA (Finance)",
        text: "Le règlement DORA impose de nouvelles exigences de résilience numérique aux acteurs financiers (banques, assurances, prestataires IT). Nous accompagnons les établissements dans leur mise en conformité.",
        button: "Nous consulter"
      }
    ]
  },
  {
    id: 7,
    theme: '#F1EFE8',
    accent: '#8C846C',
    title: "Notre Approche Unique",
    subtitle: "Des juristes qui parlent tech — 20 ans d'expérience digitale, 5 ans DPO — Qualiopi",
    cards: [
      {
        icon: Scale,
        title: "Juristes qui parlent tech",
        text: "Contrairement aux consultants purement juridiques, nous comprenons votre SI, vos architectures cloud et vos contraintes techniques. Nous faisons le pont entre vos équipes IT et votre direction.",
        button: "À propos"
      },
      {
        icon: Network,
        title: "Un réseau d'experts",
        text: "Cabinets informatiques, ingénieurs cybersécurité, hackers éthiques : nous activons le bon expert pour chaque besoin identifié lors de l'audit. Un écosystème de confiance à votre service.",
        button: "Notre réseau"
      },
      {
        icon: Award,
        title: "Certifié Qualiopi",
        text: "Nos formations sont certifiées Qualiopi. Vous pouvez les financer via vos OPCO (Atlas, Akto, etc.) et les dispositifs publics comme le plan national \"Osez l'IA\" de Bpifrance.",
        button: "Nos formations"
      }
    ]
  }
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Touch swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const next = () => {
    if (currentIndex < SLIDES.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // swipe left
      next();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      // swipe right
      prev();
    }
  };

  const currentSlideData = SLIDES[currentIndex];

  return (
    <div className="relative w-full py-16 overflow-hidden bg-white group">
      {/* Slider Container */}
      <div 
        className="w-full relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div 
              key={slide.id} 
              className="w-full flex-shrink-0 px-4 md:px-12 lg:px-24"
            >
              <div 
                className="w-full rounded-[32px] p-8 md:p-16 min-h-[600px] flex flex-col"
                style={{ backgroundColor: slide.theme }}
              >
                {/* Section Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                  <h2 className={`text-[28px] md:text-[32px] font-['Manrope:Bold',sans-serif] font-bold mb-4 ${slide.isDark ? 'text-white' : 'text-[#1A2340]'}`}>
                    {slide.title}
                  </h2>
                  <p className={`text-[15px] font-['Inter:Regular',sans-serif] ${slide.isDark ? 'text-[rgba(255,255,255,0.7)]' : 'text-[#6B7280]'}`}>
                    {slide.subtitle}
                  </p>
                </div>

                {/* Cards Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${slide.cards.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
                  {slide.cards.map((card, idx) => {
                    const IconComponent = card.icon;
                    return (
                      <div 
                        key={idx} 
                        className={`rounded-[14px] p-6 lg:p-8 flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] shadow-[0_2px_10px_rgba(0,0,0,0.07)] ${slide.isDark ? 'bg-[#1E293B] border border-white/5' : 'bg-white'}`}
                      >
                        <div 
                          className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                          style={{ backgroundColor: slide.isDark ? 'rgba(0,169,193,0.1)' : `${slide.theme}80` }}
                        >
                          <IconComponent size={20} className={slide.isDark ? 'text-[#00A9C1]' : ''} style={!slide.isDark ? { color: slide.accent } : undefined} />
                        </div>
                        <h3 className={`font-['Manrope:Semi_Bold',sans-serif] font-semibold text-[17px] mb-3 ${slide.isDark ? 'text-white' : 'text-[#1A2340]'}`}>
                          {card.title}
                        </h3>
                        <p className={`font-['Inter:Regular',sans-serif] text-[14px] leading-[1.6] mb-6 flex-grow ${slide.isDark ? 'text-[rgba(255,255,255,0.8)]' : 'text-[#374151]'}`}>
                          {card.text}
                        </p>
                        <a 
                          href={card.link || "#"} 
                          className="group/link flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] text-[13px] font-semibold mt-auto"
                          style={{ color: slide.isDark ? '#00A9C1' : '#2563EB' }}
                        >
                          {card.button}
                          <span className="transition-transform group-hover/link:translate-x-1">→</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prev}
        className={`absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center transition-all duration-200 z-10 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed scale-95' : 'hover:bg-white hover:scale-110 cursor-pointer opacity-0 group-hover:opacity-100'}`}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="text-[#1A2340]" size={24} />
      </button>

      <button 
        onClick={next}
        className={`absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center transition-all duration-200 z-10 ${currentIndex === SLIDES.length - 1 ? 'opacity-30 cursor-not-allowed scale-95' : 'hover:bg-white hover:scale-110 cursor-pointer opacity-0 group-hover:opacity-100'}`}
        disabled={currentIndex === SLIDES.length - 1}
      >
        <ChevronRight className="text-[#1A2340]" size={24} />
      </button>

      {/* Pagination & Label */}
      <div className="mt-8 flex flex-col items-center">
        <div className="flex gap-2.5 mb-3">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#2563EB] w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#6B7280] uppercase tracking-wide">
          {currentIndex + 1} / {SLIDES.length} — {currentSlideData.title}
        </p>
      </div>
      
    </div>
  );
}

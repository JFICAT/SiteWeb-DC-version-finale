import React, { useState, useRef, TouchEvent, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    content: "L’agence d’urbanisme du Pays d’Aix est accompagnée par M.FICAT dans sa démarche de protection des données depuis un mois. Nous avons déjà pu apprécier son professionnalisme dans le diagnostic rapide et précis porté sur notre structure. Sa sensibilisation et les préconisations apportées à l’ensemble de mes collaborateurs ont été claires et comprises. Le programme d’action qui a été établi à l’issue de son séjour à l’agence est bien hiérarchisé en terme de priorité et dans le temps. Nous sommes pleinement satisfait de cette collaboration qui va s’inscrire dans le long terme.",
    author: "Serge LERDA",
    role: "Directeur général, Agence d'Urbanisme du Pays d'Aix"
  },
  {
    id: 2,
    content: "Data Conforme accompagne Galénic Cosmetics Laboratory dans notre programme de sécurité informatique avec un grand professionnalisme et avec proactivité. Ses interventions sont complètes, claires et d’une grande expertise. Sa présence ponctuelle dans nos locaux est appréciée par tous nos collaborateurs.",
    author: "Marc Hauvuy",
    role: "Assistant de Direction, GALÉNIC COSMÉTICS LABORATORY"
  },
  {
    id: 3,
    content: "J’ai rencontré Jérôme FICAT et Data conforme, il y a 2 ans dans le cadre de la mise en place de notre solution RGPD. Ce qui m’a frappé chez Jérôme au-delà de ses compétences techniques évidentes, c’est son implication pour s’adapter aux besoins et aux capacités de son client. J’ai eu l’opportunité d’assister à une sensibilisation qu’il animait et malgré le faible intérêt initial du public, il a su captiver et faire participer l’ensemble de l’auditoire. On ressent réellement sa conviction sur le domaine de la RGPD.",
    author: "Stéphane BLANCHARD",
    role: "Responsable administratif, financier et RH, Compagnons du Tour de France"
  },
  {
    id: 4,
    content: "Jérôme FICAT (Data Conforme) a réalisé chez nous une mission de grande qualité, avec beaucoup d’écoute et des conseils sur mesure par rapport à notre activité. Je recommande vivement son travail.",
    author: "Etienne ZULAUF",
    role: "Gérant, OCCITECH"
  },
  {
    id: 5,
    content: "Jérôme FICAT nous a accompagné dans la mise en place du RGPD il a notamment formé nos équipes sur ce sujet. Il maîtrise son domaine sait illustrer ses propos par des exemples qui parlent à tout le monde. Il a convaincu nos équipes !",
    author: "Catherine Serrot",
    role: "Directrice, Compagnons du Tour de France Annecy"
  },
  {
    id: 6,
    content: "Data Conforme a réalisé un audit RGPD de mon organisme 2A Qualité. Étant indépendante, seule à bord de mon navire, Jérôme FICAT a su s’adapter à ma structure et me proposer une journée complète. En effet, la journée a débuté par une formation au RGPD et une sensibilisation à la cybersécurité. Où j’ai pu découvrir un monde pratiquement inconnu. La seconde partie de la journée, il a réalisé un audit de mon organisme et son environnement. En fin de journée, je suis reparti avec un plan d’action et des documents, afin de me permettre de mettre en conformité au RGPD mon système, mais également des astuces pour renforcer ma sécurité, pour mes clients et moi-même.",
    author: "Fabienne SANTALUCIA",
    role: "Consultante et auditeur qualité certifiée, 2A QUALITÉ"
  },
  {
    id: 7,
    content: "Data conforme et M. FICAT est intervenu durant deux journées à la MFR pour accompagner l’équipe aux enjeux de la RGPD. Un accompagnement de qualité, à l’écoute de l’équipe et adapté aux exigences de l’entreprise.",
    author: "Gaëlle DAVID",
    role: "Directrice, MFR La Catie"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCardsPerView(1);
      } else {
        setCardsPerView(2);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.max(0, TESTIMONIALS.length - cardsPerView);

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const next = () => {
    if (currentIndex < totalSlides) setCurrentIndex(currentIndex + 1);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) next();
    if (touchEndX.current - touchStartX.current > 50) prev();
  };

  return (
    <section className="w-full py-24 bg-[#0A192F] relative overflow-hidden" data-name="Section - Testimonials">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A9C1] opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#82E600] opacity-[0.03] rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]"></div>

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-[600px]">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[rgba(0,169,193,0.1)] border border-[rgba(0,169,193,0.2)] text-[#00A9C1] font-['Inter:Semi_Bold',sans-serif] text-[14px] mb-6 uppercase tracking-wider">
              Témoignages
            </div>
            <h2 className="font-['Manrope:Bold',sans-serif] text-[36px] md:text-[42px] text-white mb-6 leading-tight">
              Témoignages de nos clients
            </h2>
          </div>
          
          <div className="flex gap-4 mt-8 md:mt-0">
            <button 
              onClick={prev}
              className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300
                ${currentIndex === 0 
                  ? 'border-white/10 text-white/20 cursor-not-allowed' 
                  : 'border-white/20 text-white hover:bg-white/10 hover:border-white/40 cursor-pointer'}`}
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={next}
              className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300
                ${currentIndex >= totalSlides 
                  ? 'border-white/10 text-white/20 cursor-not-allowed' 
                  : 'border-white/20 text-white hover:bg-white/10 hover:border-white/40 cursor-pointer'}`}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          ref={containerRef}
        >
          <div 
            className="flex gap-8 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ 
              transform: containerRef.current 
                ? `translateX(-${currentIndex * ((containerRef.current.offsetWidth - (cardsPerView - 1) * 32) / cardsPerView + 32)}px)` 
                : 'translateX(0px)'
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id}
                className="flex-shrink-0 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-[32px] p-10 flex flex-col justify-between"
                style={{ 
                  width: containerRef.current 
                    ? `${(containerRef.current.offsetWidth - (cardsPerView - 1) * 32) / cardsPerView}px` 
                    : `calc((100% - ${(cardsPerView - 1) * 32}px) / ${cardsPerView})`
                }}
              >
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0047BA] to-[#00A9C1] rounded-2xl flex items-center justify-center mb-8">
                    <Quote className="text-white w-6 h-6" fill="white" />
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] text-[18px] text-white/80 leading-relaxed italic mb-10">
                    "{t.content}"
                  </p>
                </div>
                
                <div>
                  <h4 className="font-['Manrope:Bold',sans-serif] text-[20px] text-white mb-1">
                    {t.author}
                  </h4>
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#00A9C1] font-semibold uppercase tracking-wide">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-3 mt-16">
          {Array.from({ length: totalSlides + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer 
                ${currentIndex === i ? 'w-8 bg-[#00A9C1]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import svgPaths from "./svg-pyljap6vtq";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white relative rounded-[24px] shadow-[0px_12px_32px_0px_rgba(0,27,60,0.06)] shrink-0 flex flex-col transition-all duration-300 overflow-hidden ${
        isExpanded ? 'h-[480px]' : 'h-[200px]'
      }`}
    >
      {/* Icône en haut à gauche */}
      <div className="absolute bg-[#dee8ff] flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]">
        {icon}
      </div>

      {/* Titre - multiline autorisé */}
      <div className="absolute left-[32px] right-[70px] top-[105px]">
        <h3 className="font-['Manrope:Extra_Bold',sans-serif] text-[#001e40] text-[20px] leading-[28px]">
          {title}
        </h3>
      </div>

      {/* Bouton chevron en bas à droite */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-[24px] bottom-[20px] w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#f0f3ff] transition-colors z-10 cursor-pointer"
        aria-label={isExpanded ? "Réduire" : "Développer"}
      >
        <svg
          className={`w-[16px] h-[16px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#1D638F"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Contenu déroulant */}
      {isExpanded && (
        <div className="absolute left-[32px] right-[32px] top-[220px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#43474f] text-[16px] leading-[24px] mb-[24px]">
            {description}
          </p>
          <div className="border-[rgba(195,198,209,0.2)] border-solid border-t h-px mb-[24px]" />
          <div className="flex flex-col gap-[10px]">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-[12px] items-start">
                <div className="relative shrink-0 size-[15px] mt-[2px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <g><path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" /></g>
                  </svg>
                </div>
                <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
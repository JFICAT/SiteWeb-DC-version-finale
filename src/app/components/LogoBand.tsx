import React from "react";

const base = import.meta.env.BASE_URL;

const logos = [
  `${base}logos-clients/client-logo-1.png`,
  `${base}logos-clients/client-logo-2.png`,
  `${base}logos-clients/client-logo-3.png`,
  `${base}logos-clients/client-logo-4.png`,
  `${base}logos-clients/client-logo-5.png`,
  `${base}logos-clients/client-logo-6.png`,
  `${base}logos-clients/client-logo-7.png`,
  `${base}logos-clients/client-logo-8.png`,
  `${base}logos-clients/client-logo-9.png`,
  `${base}logos-clients/client-logo-10.png`,
  `${base}logos-clients/client-logo-11.png`,
  `${base}logos-clients/client-logo-12.png`,
];

export function LogoBand() {
  // Double the logos to create the infinite loop effect
  const doubledLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white py-12 overflow-hidden border-y border-[rgba(0,169,193,0.1)] flex flex-col items-center gap-6">
      <p className="text-center font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#00A9C1] uppercase tracking-[0.3em] font-bold opacity-90">
        Témoignages de nos clients
      </p>
      <div className="relative flex w-full">
        <div className="flex animate-scroll whitespace-nowrap gap-28 items-center">
          {doubledLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 p-4">
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-28 w-auto object-contain max-w-[280px] transition-all duration-500 hover:scale-105"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
}

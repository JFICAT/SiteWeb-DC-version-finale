import { Navbar, Footer } from "../App";

export default function TrustCenterPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-[#F8FAFB]">
      <Navbar currentPage="trust-center" onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <section className="relative w-full pt-[140px] pb-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8 relative z-10 text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-[rgba(0,169,193,0.1)] text-[#00A9C1] font-['Inter:Semi_Bold',sans-serif] text-[14px] mb-8 border border-[#00A9C1]/20 uppercase tracking-wider">
            Engagement de conformité
          </div>
          <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[64px] leading-[1.1] mb-8">
            Centre de Confiance
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[22px] text-[#5A6C7D] max-w-[800px] mx-auto font-light">
            La sécurité, la transparence et la protection de vos données sont inscrites dans le code et les processus de Data Conforme.
          </p>
        </div>
      </section>

      {/* Trust Center Widget */}
      <section className="w-full px-8 pb-24 -mt-16 relative z-20">
        <div className="max-w-[1200px] mx-auto bg-white/100 rounded-[32px] shadow-2xl border border-white overflow-hidden p-2 md:p-8">
          <iframe 
            src="https://application-rgpd.dataconforme.com/public/widget/7989b1c2-4d1a-4862-bb02-eba23a09526a" 
            width="100%" 
            height="2600" 
            frameBorder="0" 
            style={{ border: 0, overflow: "hidden" }}
            title="Trust Center Widget"
          ></iframe>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

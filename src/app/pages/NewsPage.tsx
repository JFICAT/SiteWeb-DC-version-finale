import { useEffect } from "react";
import { Navbar, Footer } from "../App";

export default function NewsPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  // Remplacer par votre Feed ID Curator.io (ex: "8be8d5d4-42f1-479c-8f4b-...")
  const FEED_ID = "c9ff493a-cfaa-4d4c-a1ff-3f522b72c6db";

  useEffect(() => {
    // Ne charger le script que si le FEED_ID est configuré
    if (!FEED_ID) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://cdn.curator.io/published/${FEED_ID}.js`;

    // On l'ajoute au body
    document.body.appendChild(script);

    return () => {
      // Nettoyage si on quitte la page
      document.body.removeChild(script);
    };
  }, [FEED_ID]);

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section simple */}
      <section className="relative w-full pt-[140px] pb-16 px-8 text-center" style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #FFFFFF 100%)' }}>
        <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[48px] mb-4">Actualités</h1>
        <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5A6C7D] max-w-2xl mx-auto">
          Suivez nos dernières actualités, nos conseils en conformité et nos innovations IA directement depuis notre flux LinkedIn.
        </p>
      </section>

      {/* Curator Feed Container */}
      <style>{`
        /* Container forcing a real grid and killing waterfall layout */
        #curator-feed-default-feed-layout {
          display: grid !important;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)) !important;
          gap: 32px !important;
          position: relative !important;
          height: auto !important;
          width: 100% !important;
          padding: 20px 0 !important;
        }

        /* Post Cards */
        .crt-post {
          position: relative !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 600px !important; /* Fixed height for harmony */
          display: flex !important;
          flex-direction: column !important;
          margin: 0 !important;
          transform: none !important;
          background: #FFFFFF !important;
          border-radius: 24px !important;
          border: 1px solid rgba(0, 169, 193, 0.1) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04) !important;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
          overflow: hidden !important;
        }

        .crt-post:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 12px 30px rgba(0, 169, 193, 0.12) !important;
          border-color: rgba(0, 169, 193, 0.3) !important;
        }

        /* Image consistency */
        .crt-image-c {
          height: 250px !important;
          min-height: 250px !important;
          background: #F8FAFB !important;
          position: relative !important;
          overflow: hidden !important;
        }

        .crt-post.crt-post-v2 .crt-image-c img,
        .crt-post .crt-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          transition: transform 0.6s ease !important;
        }

        .crt-post:hover .crt-image {
          transform: scale(1.05) !important;
        }

        /* Content Area */
        .crt-post-c {
          padding: 24px !important;
          display: flex !important;
          flex-direction: column !important;
          flex: 1 !important;
          overflow: hidden !important;
          background: white !important;
        }

        /* Text styling & scrolling */
        .crt-post-text {
          font-family: 'Inter', sans-serif !important;
          font-size: 15px !important;
          line-height: 1.6 !important;
          color: #4B5563 !important;
          margin-bottom: 16px !important;
          max-height: 180px !important;
          overflow-y: auto !important;
          padding-right: 8px !important;
        }

        /* Custom Scrollbar for text */
        .crt-post-text::-webkit-scrollbar {
          width: 4px;
        }
        .crt-post-text::-webkit-scrollbar-track {
          background: #F1F5F9;
        }
        .crt-post-text::-webkit-scrollbar-thumb {
          background: #CBD5E1;
          border-radius: 10px;
        }

        /* Header / Date */
        .crt-post-header {
          margin-bottom: 12px !important;
          padding: 0 !important;
        }

        .crt-post-date {
          font-size: 13px !important;
          color: #94A3B8 !important;
          font-weight: 500 !important;
        }

        /* Feed Attribution */
        .crt-logo.crt-tag {
          display: none !important; /* Clean view */
        }
      `}</style>
      <main className="flex-grow max-w-[1400px] mx-auto w-full px-8 pb-24">
        <div id="curator-feed-default-feed-layout" data-curator-feed-id={FEED_ID}>
          <a href="https://curator.io" target="_blank" rel="noreferrer" className="crt-logo crt-tag">
            Powered by Curator.io
          </a>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

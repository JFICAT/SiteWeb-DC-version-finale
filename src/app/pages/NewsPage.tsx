import { useEffect } from "react";
import { Navbar, Footer } from "../App";

export default function NewsPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  // Remplacer par votre Feed ID Curator.io (ex: "8be8d5d4-42f1-479c-8f4b-...")
  const FEED_ID = "c9ff493a-cfaa-4d4c-a1ff-3f522b72c6db";

  useEffect(() => {
    // Ne charger le script que si le FEED_ID est configuré
    if (FEED_ID === "VOTRE_FEED_ID_ICI") return;

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
      <main className="flex-grow max-w-[1400px] mx-auto w-full px-8 pb-24">
        {FEED_ID === "VOTRE_FEED_ID_ICI" ? (
          <div className="bg-[#F8FAFB] border-2 border-dashed border-[#E5E9F0] rounded-2xl p-12 text-center">
            <p className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] mb-4 text-[18px]">
              Flux LinkedIn en cours de configuration
            </p>
            <p className="text-[#5A6C7D] max-w-lg mx-auto mb-6">
              Pour afficher vos posts, remplacez la variable <code>FEED_ID</code> dans le fichier <code>NewsPage.tsx</code> par votre identifiant Curator.io.
            </p>
            <a
              href="https://curator.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#00A9C1] text-white rounded-lg font-bold hover:bg-[#0047BA] transition-colors"
            >
              Aller sur Curator.io
            </a>
          </div>
        ) : (
          <div id="curator-feed-default-feed-layout" data-curator-feed-id={FEED_ID}>
            <a href="https://curator.io" target="_blank" rel="noreferrer" className="crt-logo crt-tag">
              Powered by Curator.io
            </a>
          </div>
        )}
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

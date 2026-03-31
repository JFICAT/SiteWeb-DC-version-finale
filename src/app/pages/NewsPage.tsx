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

    // Fonction pour traiter les publications
    const processPosts = () => {
      const posts = document.querySelectorAll('.crt-post:not(.processed)');
      posts.forEach(post => {
        const textElem = post.querySelector('.crt-post-text') as HTMLElement;
        if (!textElem) return;

        // On évite de traiter si le texte est déjà court
        const originalHTML = textElem.innerHTML;
        const text = textElem.innerText.trim();
        
        // Détection des 2 premières phrases par les points "."
        let count = 0;
        let splitIndex = -1;
        for (let i = 0; i < text.length; i++) {
          if (text[i] === '.') {
            count++;
            if (count === 2) {
              splitIndex = i;
              break;
            }
          }
        }

        // Si on a au moins 2 phrases et qu'il reste du texte significatif après
        if (splitIndex !== -1 && splitIndex < text.length - 15) {
          const shortText = text.substring(0, splitIndex + 1);
          
          // On sauvegarde le contenu initial
          textElem.dataset.fullHtml = originalHTML;
          textElem.dataset.shortText = shortText;
          
          // Initialement réduit
          textElem.innerHTML = shortText;
          
          const btn = document.createElement('button');
          btn.className = 'read-more-btn';
          btn.innerText = 'Lire plus';
          btn.style.marginTop = '8px';
          
          btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation(); // Empêche l'ouverture de la modal Curator
            const isCollapsed = btn.innerText === 'Lire plus';
            if (isCollapsed) {
              textElem.innerHTML = textElem.dataset.fullHtml || '';
              btn.innerText = 'Lire moins';
            } else {
              textElem.innerHTML = textElem.dataset.shortText || '';
              btn.innerText = 'Lire plus';
            }
          };

          // Insérer le bouton après le texte
          textElem.after(btn);
        }
        
        post.classList.add('processed');
      });
    };

    // Observer pour détecter l'arrivée de nouvelles publications du widget
    const observer = new MutationObserver(() => {
      processPosts();
    });

    const targetNode = document.getElementById('curator-feed-default-feed-layout');
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    // On l'ajoute au body
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
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
        /* Masonry Layout */
        #curator-feed-default-feed-layout {
          columns: 3 350px !important;
          column-gap: 32px !important;
          padding: 40px 0 !important;
          width: 100% !important;
          display: block !important;
          position: relative !important;
          height: auto !important;
        }

        @media (max-width: 1100px) {
          #curator-feed-default-feed-layout {
            columns: 2 300px !important;
          }
        }
        @media (max-width: 700px) {
          #curator-feed-default-feed-layout {
            columns: 1 !important;
          }
        }

        /* The Card UI */
        .crt-post {
          break-inside: avoid !important;
          display: inline-block !important;
          width: 100% !important;
          margin-bottom: 32px !important;
          background: #FFFFFF !important;
          border-radius: 12px !important;
          border: none !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
          position: relative !important;
          overflow: hidden !important;
          vertical-align: top !important;
        }

        .crt-post:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 12px 30px rgba(0, 169, 193, 0.12) !important;
        }

        /* Inner Content */
        .crt-post-c {
          padding: 24px !important;
          background: white !important;
        }

        /* Header (Author) */
        .crt-post-header {
          margin-bottom: 16px !important;
          padding: 0 !important;
          position: relative !important;
        }

        .crt-post-name {
          font-family: 'Poppins', sans-serif !important;
          font-weight: 700 !important;
          color: #0A192F !important;
          font-size: 16px !important;
          display: block !important;
          margin-bottom: 2px !important;
        }

      /* Body text styling */
        .crt-post-text {
          font-family: 'Inter', sans-serif !important;
          line-height: 1.6 !important;
          color: #4B5563 !important;
          font-size: 15px !important;
          margin-top: 12px !important;
          transition: all 0.5s ease-in-out !important;
          position: relative !important;
        }

        .crt-post-text.collapsed {
          max-height: none !important; /* Managed by JS for accuracy */
        }

        /* Read More Button styling */
        .read-more-btn {
          display: inline-block !important;
          margin-top: 12px !important;
          color: #0A66C2 !important;
          font-weight: 700 !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 14px !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
          border: none !important;
          background: none !important;
          padding: 0 !important;
          text-decoration: none !important;
        }

        .read-more-btn:hover {
          color: #004182 !important;
          text-decoration: underline !important;
        }

        /* LinkedIn Blueprint - hashtags & mentions */
        .crt-post-text a, 
        .crt-post-text span[class*="hashtag"],
        .crt-post-text span[class*="mention"] {
          color: #0A66C2 !important;
          text-decoration: none !important;
          font-weight: 600 !important;
        }

        /* Clickable LinkedIn Logo (repursing crt-tag or crt-logo) */
        .crt-logo.crt-tag {
          position: absolute !important;
          top: 24px !important;
          right: 24px !important;
          width: 24px !important;
          height: 24px !important;
          opacity: 0.8 !important;
          z-index: 10 !important;
          background-position: center !important;
          background-size: contain !important;
          transition: all 0.3s ease !important;
          display: block !important;
          cursor: pointer !important;
        }

        .crt-logo.crt-tag:hover {
          opacity: 1 !important;
          transform: scale(1.1) !important;
        }

        /* Images and Media */
        .crt-image-c {
          margin: 0 !important;
          border-radius: 0 0 12px 12px !important;
          overflow: hidden !important;
          background: #F8FAFB !important;
        }
        
        .crt-image {
          transition: transform 0.6s ease !important;
          display: block !important;
          width: 100% !important;
          height: auto !important;
        }
        
        .crt-post:hover .crt-image {
          transform: scale(1.05) !important;
        }

        /* Hide curator attribution if possible or style it better */
        .crt-logo.crt-tag:after {
          /* Could add dummy text here if needed, but we keep it as icon */
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

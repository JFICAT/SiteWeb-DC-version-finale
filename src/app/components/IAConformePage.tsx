import Body from "../../imports/Body-5-752";
import { Navbar, Footer } from "../App";

export default function IAConformePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar currentPage="ia-conforme" onNavigate={onNavigate} />
      
      {/* Container pour le contenu Figma */}
      <div className="relative w-full pt-[96px]">
        {/* Style pour cacher la navbar Figma et les images de fond */}
        <style>{`
          [data-name="Header - TopAppBar"] {
            display: none !important;
          }
          [data-name="Hero Section"] > .absolute.inset-0.opacity-10 {
            display: none !important;
          }
          [data-name="Hero Section"] {
            top: 0 !important;
            padding-top: 64px !important;
          }
        `}</style>
        <Body onNavigate={onNavigate} />
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
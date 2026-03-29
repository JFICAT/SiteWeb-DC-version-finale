import { Navbar, Footer } from "../App";
import Fabrik01Content from "../components/Fabrik01Content";

export default function Fabrik01Page({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar onNavigate={onNavigate} />
      <div className="relative w-full pt-[96px]">
        <Fabrik01Content onNavigate={onNavigate} />
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

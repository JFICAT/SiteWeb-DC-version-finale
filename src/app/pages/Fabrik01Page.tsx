import { Navbar, Footer } from "../App";
import Body from "../../imports/Body";

export default function Fabrik01Page({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar onNavigate={onNavigate} />
      <div className="relative w-full pt-[96px]">
        <Body />
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

import { Navbar } from "../App";
import Main from "../../imports/Main";

export default function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar onNavigate={onNavigate} />
      <div className="relative w-full flex flex-col">
        <Main onNavigate={onNavigate} />
      </div>
    </div>
  );
}

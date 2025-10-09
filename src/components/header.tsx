//import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div>
      <header className="w-full min-h-[70vh] bg-[url(/images/bg-header.jpg)] bg-cover">
        <div className="flex w-full justify-between items-center">
          <h1 className="my-6 text-[var(--color-cream)] text-8xl font-bold ml-6">
            Gig Hunter
          </h1>
          <Menu className="stroke-[var(--color-cream)] stroke-[4] flex-end w-15 h-15 cursor-pointer mr-8" />
        </div>
      </header>
      <div className="w-full h-5 bg-[var(--color-orange-dark)]"></div>
    </div>
  );
}

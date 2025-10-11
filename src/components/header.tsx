"use client";
import { SquareMenu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      {!isMenuOpen ? (
        <div className="inline-block w-full">
          <div className="flex w-full justify-between items-center p-4">
            <div className="inline-flex items-center border-4 border-[color:var(--color-cream)] rounded-lg px-3 pb-3">
              <h1 className="text-[var(--color-cream)] tracking-tight text-5xl font-bold">
                Gig Hunter
              </h1>
            </div>
            <SquareMenu color="#FFFF"
              onClick={toggleMenu}
              className="stroke-[var(--color-cream)] stroke-[2] w-[70px] h-[70px] cursor-pointer hover:stroke-[var(--color-orange-dark)] transition-colors"
            />
          </div>
          <div className="p-4 pb-8">
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 bg-black z-50">
          <div className="flex flex-col h-full">
            <div className="w-full min-h-[20vh] p-4 flex justify-between items-center">
              <h1 className="text-[var(--color-cream)] text-5xl font-bold">
                Gig Hunter
              </h1>
              <X
                onClick={toggleMenu}
                className="stroke-[var(--color-cream)] stroke-[3] w-[60px] h-[60px] cursor-pointer hover:stroke-[var(--color-orange-dark)] transition-colors"
              />
            </div>
            <div className="w-full h-5 bg-[var(--color-orange-dark)]"></div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
              <a
                onClick={toggleMenu}
                href="#home"
                className="text-[var(--color-cream)] text-4xl font-bold hover:text-[var(--color-orange-dark)] transition-colors"
              >
                Home
              </a>
              <a
                onClick={toggleMenu}
                href="#concerts"
                className="text-[var(--color-cream)] text-4xl font-bold hover:text-[var(--color-orange-dark)] transition-colors"
              >
                Concerts
              </a>
              <a
                onClick={toggleMenu}
                href="#about"
                className="text-[var(--color-cream)] text-4xl font-bold hover:text-[var(--color-orange-dark)] transition-colors"
              >
                About Us
              </a>
              <a
                onClick={toggleMenu}
                href="#contact"
                className="text-[var(--color-cream)] text-4xl font-bold hover:text-[var(--color-orange-dark)] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

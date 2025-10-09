//import Link from "next/link";
"use client";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {!isMenuOpen ? (
        // Header normale
        <header className="w-full min-h-[70vh] bg-[url(/images/bg-header.jpg)] bg-cover bg-center p-4">
          <div className="flex w-full justify-between items-center">
            <h1 className="text-[var(--color-cream)] text-8xl font-bold">Gig Hunter</h1>
            <Menu
              onClick={toggleMenu}
              className="stroke-[var(--color-cream)] stroke-[3] w-[60px] h-[60px] cursor-pointer hover:stroke-[var(--color-orange-dark)] transition-colors"
            />
          </div>
        </header>
      ) : (
        // Menu a schermo intero
        <div className="fixed inset-0 bg-black z-50">
          <div className="flex flex-col h-full">
            {/* Header nel menu (opzionale) */}
            <header className="w-full min-h-[20vh] bg-[url(/images/bg-header.jpg)] bg-cover bg-center p-4">
              <div className="flex w-full justify-between items-center">
                <h1 className="text-[var(--color-cream)] text-8xl font-bold">Gig Hunter</h1>
                <Menu
                  onClick={toggleMenu}
                  className="stroke-[var(--color-cream)] stroke-[4] w-[60px] h-[60px] cursor-pointer hover:stroke-[var(--color-orange-dark)] transition-colors"
                />
              </div>
            </header>

            {/* Linea arancione sotto l'header */}
            <div className="w-full h-5 bg-[var(--color-orange-dark)]"></div>

            {/* Link del menu */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
              <a
                href="#home"
                className="text-[var(--color-cream)] text-4xl font-bold hover:text-[var(--color-orange-dark)] transition-colors"
              >
                Home
              </a>
              <a
                href="#concerts"
                className="text-[var(--color-cream)] text-4xl font-bold hover:text-[var(--color-orange-dark)] transition-colors"
              >
                Concerti
              </a>
              <a
                href="#about"
                className="text-[var(--color-cream)] text-4xl font-bold hover:text-[var(--color-orange-dark)] transition-colors"
              >
                Chi siamo
              </a>
              <a
                href="#contact"
                className="text-[var(--color-cream)] text-4xl font-bold hover:text-[var(--color-orange-dark)] transition-colors"
              >
                Contatti
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

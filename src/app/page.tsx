"use client";
import { useState } from "react";
import Backdrop from "@/components/backdrop";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Backdrop imageUrl="/images/bg-header.jpg" opacity={60} overlayColor="black">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {!isMenuOpen && <Hero />}
      </Backdrop>
      <div className="w-full h-5 bg-[var(--color-orange-dark)]"></div>
    </>
  );
}



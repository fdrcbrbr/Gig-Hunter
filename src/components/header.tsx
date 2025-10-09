//import Link from "next/link";
//import { Search, ShoppingCart, CircleUserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="flex w-full bg-[url('/public/bg-header.jpg')]">
      <div className="flex-1 flex justify-start items-center">
        <h1 className="--font-poppins font-bold">Gig Hunter</h1>
      </div>
    </header>
  );
}
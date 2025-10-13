import Backdrop from "@/components/backdrop";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase"
import EventList from "@/components/even-list";

export default function HomePage() {

  return (
    <>
      <Backdrop imageUrl="/images/bg-header.jpg" opacity={80} overlayColor="black">
        <Header/>
        <Hero />
      </Backdrop>
      <div className="w-full h-5 bg-[var(--color-orange-dark)]"></div>
      <EventList/>
      <Showcase/>
    </>
  );
}



import Backdrop from "@/components/backdrop";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase"
import EventList from "@/components/list-events";

export default function HomePage() {

  return (
    <>
      <Backdrop>
        <Header/>
        <Hero />
      </Backdrop>
      <div className="w-full h-5 bg-[var(--color-orange-dark)]"></div>
      <EventList/>
      <Showcase/>
    </>
  );
}



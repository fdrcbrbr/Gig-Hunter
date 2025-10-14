import Backdrop from "@/components/backdrop";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase"
import EventList from "@/components/list-events";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  return (
    <>
      <Backdrop>
        <Header/>
        <Hero />
      </Backdrop>
      <EventList searchParams={searchParams} />
      <Showcase/>
    </>
  );
}



import Backdrop from "@/components/backdrop";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import EventList from "@/components/list-events";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  // Controlla se esiste almeno uno dei parametri di ricerca
  const hasSearchParams = !!searchParams.query || !!searchParams.genre;

  return (
    <>
      <Backdrop>
        <Header />
        <Hero />
      </Backdrop>
      {/* Mostra EventList solo se c'è una query di ricerca o un genere */}
      {hasSearchParams && <EventList searchParams={searchParams} />}
      <Showcase />
    </>
  );
}




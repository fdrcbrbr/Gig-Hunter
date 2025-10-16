import Backdrop from "@/components/backdrop";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import EventList from "@/components/list-events";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const hasSearchParams = !!searchParams.query || !!searchParams.genre || !!searchParams.date;
  const pageParam = searchParams.page;
  const page = typeof pageParam === 'string' ? parseInt(pageParam) : 1;

  return (
    <>
      <Backdrop>
        <Header />
        <Hero />
      </Backdrop>
      {hasSearchParams && <EventList searchParams={searchParams} />}
      <Showcase page={page} limit={20} />
    </>
  );
}


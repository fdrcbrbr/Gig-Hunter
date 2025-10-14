import { getEventsByKeyword } from "@/data/events";
import { Event, EventsRes } from "@/lib/interfaces";
import CardList from "@/components/card-list";

interface EventsPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function EventList({ searchParams = {} }: EventsPageProps) {

  if(!searchParams){
    return
  }

  const date = searchParams.date;
  const query = typeof searchParams.query === 'string' ? searchParams.query : "";
  const genreCode = searchParams.genre;

  let events: Event[] = [];

  try {
    const response: EventsRes = await getEventsByKeyword(query);
    events = response._embedded.events;

   
     if (genreCode) {
      events = events.filter((event) =>
        event.classifications.some(
          (classification) => classification.genre.id === genreCode
        )
      );
    }else if(date) {
        events = events.filter((event) => {
        const eventDate = event.dates.start.localDate;
      return eventDate === date;
      })}
    

    return (
      <div className="bg-[color:var(--color-cream)] pt-15">
        <div className="w-[90vw] mx-auto">
          <div className="flex mb-15 items-center justify-center relative">
            <div className="border-t-2 border-gray-600 w-full absolute"></div>
            <span className="bg-[color:var(--color-cream)] px-4 text-center text-xl font-medium text-gray-700 relative z-10">
               Uppcoming Events {query ? `for "${query}"` : ""}
            </span>
          </div>
          <div className="grid gap-3 place-content-center">
            {events.length > 0 ? (
              events.map((event) => <CardList event={event} key={event.id} />)
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No events found 
              </p>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading events:", error);
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <div className="text-red-400 mb-4">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Error loading events
          </h3>
          <p className="text-gray-500">Please try again later.</p>
        </div>
      </div>
    );
  }
}

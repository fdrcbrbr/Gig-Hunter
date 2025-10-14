import { getEvents } from "@/data/events";
import Link from "next/link";
import { Event, EventsRes } from "@/lib/interfaces";
import Card from "@/components/card";


export default async function Showcase() {

  let events: Event[] = [];

  try {
    const response: EventsRes = await getEvents();
    events = response._embedded.events;

    return (
      <div className="bg-[color:var(--color-cream)] py-15">
        <div className="w-[90vw] mx-auto">
          {/* Line box */}
          <div className="flex mb-15 items-center justify-center relative">
            {/* Line */}
            <div className="border-t-2 border-gray-600 w-full absolute"></div>
            {/* Text" */}
            <span className="bg-[color:var(--color-cream)] px-4 text-center text-xl font-medium text-gray-700 relative z-10">
              Upcoming Events
            </span>
          </div>

          {/* Events Grid */}
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <Card event={event} key={event.id} />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading products:", error);
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
            Error loading products
          </h3>
          <p className="text-gray-500">Please try again later.</p>
          <Link
            href="/"
            className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }
}

import { Event, EventAttraction } from "@/data/interfaces";
import Link from "next/link";
import Image from "next/image";

export default function CardList({ event }: { event: Event }) {
  if (!event) return null;

  const eventImage = event.images[3];
  const cityName = event._embedded.venues[0]?.city?.name || "Unknown City";
  const eventDate = new Date(event.dates.start.localDate);
  const dayName = eventDate.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  const dayNumber = eventDate.getDate();
  const monthName = eventDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase();

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-md flex items-center p-2">

      <div className="text-center mr-4">
        <div className="font-bold text-xs">{dayName}</div>
        <div className="font-bold text-xl">{dayNumber}</div>
        <div className="text-xs">{monthName}</div>
      </div>


      <div className="flex-1 flex items-center">
        <Image
          src={eventImage.url}
          alt={event.name}
          width={60}
          height={60}
          className="w-[60px] h-[60px] object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-lg text-black">{event.name}</h3>
          <p className="text-sm text-gray-600">
            {event._embedded.attractions?.map((attr: EventAttraction) => attr.name).join(", ") || ""}
          </p>
          <p className="text-sm text-gray-600">
            {cityName} | {event._embedded.venues[0]?.name || "Unknown Venue"}
          </p>
        </div>
      </div>

      <Link
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600 transition-colors"
      >
        Get Tickets
      </Link>
    </div>
  );
}

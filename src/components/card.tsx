import { Event } from "@/lib/interfaces";
import Link from "next/link";
import Image from "next/image";

export default function Card({ event }: { event: Event }) {
  if (!event) return null;

  const eventImage = event.images[3];
  const cityName = event._embedded.venues[0]?.city?.name || "Unknown City";
  const eventDate = event.dates.start.localDate;

  return (
    <Link
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer bg-black rounded-lg overflow-hidden hover:shadow-lg transition-shadow block"
    >
      <div className="aspect-square rounded-lg overflow-hidden mb-4">
        <Image
          src={eventImage.url}
          alt={event.name}
          width={eventImage.width}
          height={eventImage.height}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-2 p-2">
        <h3 className="text-lg font-bold text-gray-100 hover:text-gray-600 line-clamp-2">
          {event.name}
        </h3>
        <p className="text-medium text-gray-300 hover:text-gray-600">
          {cityName} | {eventDate}
        </p>
      </div>
    </Link>
  );
}

"use client";
import { Event, EventVenue } from "@/lib/interfaces";

export function CardListDd({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) {


  const eventVenue: EventVenue[] = event._embedded.venues;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_API_KEY_MAPS}&q=${encodeURIComponent(`${eventVenue[0].address.line1}, ${eventVenue[0].city.name}, ${eventVenue[0].country.name}`)}`;

  return (
    <div className="w-full h-[70vh] mt-3 border rounded-lg overflow-hidden shadow-lg bg-gray-50">

      <div className="flex w-full h-full">

        <div className="w-1/2 p-4 overflow-y-auto">
          <p className="font-bold">Venue:</p>
          <p>{eventVenue[0].name|| "Description not available."}</p>
          <p className="font-bold mt-2">Time:</p>
          <p>{event.dates.start.localTime || "Starting time not available"}</p>
          <p className="font-bold mt-2">Location:</p>
          <p>
            {eventVenue[0].address.line1}, {eventVenue[0].city.name}
          </p>
        </div>

        <div className="w-1/2 h-full p-4">
          <iframe
            src={mapUrl}
            className="w-full h-full rounded-lg"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

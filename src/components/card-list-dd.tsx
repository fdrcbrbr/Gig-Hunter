"use client";
import { Event } from "@/lib/interfaces";
import { Button } from "@/components/ui/button";

export function CardListDd({
  event,
  cityName,
  venueName,
  onClose,
}: {
  event: Event;
  cityName: string;
  venueName: string;
  onClose: () => void;
}) {
  return (
    <div className="w-full h-[70vh] mx-auto border rounded-lg overflow-hidden shadow-lg bg-gray-50">
      <div className="p-4 flex h-full">

        <div className="flex-1 overflow-y-auto">
          <p className="font-bold">Description:</p>
          <p>{event.description || "Description not available."}</p>
          <p className="font-bold mt-2">Time:</p>
          <p>{event.dates.start.localTime || "Starting time not available"}</p>
          <p className="font-bold mt-2">Price:</p>
          <p className="font-bold mt-2">Location:</p>
          <p>
            {venueName}, {cityName}
          </p>
                    <Button className="w-full md:w-auto" onClick={onClose}>
            Get Tickets
          </Button>
        </div>


        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex-1 h-40">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
                venueName + ", " + cityName
              )}`}
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

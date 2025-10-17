"use client";
import { Event, EventAttraction } from "@/lib/interfaces";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CardListDd } from "@/components/card-list-dd";

export default function CardList({ event }: { event: Event }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const eventImage = event.images[3];
  const cityName = event._embedded.venues[0]?.city?.name || "Unknown City";
  const venueName = event._embedded.venues[0]?.name || "Unknown Venue";
  const eventDate = new Date(event.dates.start.localDate);
  const dayName = eventDate.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  const dayNumber = eventDate.getDate();
  const monthName = eventDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase();

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-md p-2">

      <div className="flex items-center">
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
              {cityName} | {venueName}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="flex items-center justify-center gap-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          {isExpanded ? "Less Info" : "More Info"}
        </Button>

         <Button className="w-full md:w-auto ml-2 bg-red-600">
            Get Tickets
          </Button>
      </div>

      {isExpanded && (
        <CardListDd
          event={event}
          onClose={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}


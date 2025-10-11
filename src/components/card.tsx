/* import { Event } from "@/data/interfaces";
import Link from "next/link";
import Image from "next/image";

export default async function Card({ event }: { event: Event }) {
  if (!event) return;

  return (
    <div className=" hover:text-gray-700 ">
      <Link
        key={event.id}
        href={`/events/${event.id}`}
        className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <Image
            src={event.thumbnail}
            alt={event.title}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-medium text-gray-900 hover:text-gray-600 line-clamp-2">
            {event.title}
          </h3>
          <p className="text-lg font-bold text-gray-900  hover:text-gray-600 ">
            ${event.price}
          </p>
        </div>
      </Link>
    </div>
  );
}
 */
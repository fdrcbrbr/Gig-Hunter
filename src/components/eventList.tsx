import {getEventsByPlace} from "@/data/events";

export default async function EventList() {
  const data = await getEventsByPlace("stockholm");
  console.log("API Response:", data);

    if (!data?._embedded?.events) {
    return <div>No events found or API error.</div>;
  }

  const { _embedded: { events } } = data;

  return (
    <div>

      <div className="grid justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => {
            return <h1 key={event.id}>{event.name}</h1>;
          })}
        </div>
      </div>
    </div>
  );
}
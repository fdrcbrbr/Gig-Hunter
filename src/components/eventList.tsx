import {getEventsByPlace} from "@/data/events";

export default async function EventList() {
  const data = await getEventsByPlace("stockholm");

    if (!data?._embedded?.events) {
    return <div>No events found or API error.</div>;
  }

  const { _embedded: { events } } = data;

  return (
    <div>

      <div className="grid justify-center">
        <div>
          {events.map((event) => {
            return <h1 key={event.id}>{event.name}</h1>;
          })}
        </div>
      </div>
    </div>
  );
}
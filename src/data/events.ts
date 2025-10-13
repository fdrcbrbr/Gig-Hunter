import {EventsRes, Event} from "@/data/interfaces";

const apiKey = process.env.API_KEY_TICKET;

const baseurl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&countryCode=SE`;


/**
 * Fetch events according to a selected city
 * @param city - The city name (e.g., 'stockholm', 'uppsala')
 * @returns Promise with Promise with event's data
 */
export async function getEventsByCity(city: string): Promise<EventsRes> {
  try {
    const response = await fetch(`${baseurl}&city=${city}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: EventsRes = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error(
      `Failed to fetch events: ${error instanceof Error ? error.message : String(error)
      }`
    );
  }
};

/**
 * Fetch a desired amount number of events 
 * @param evenst - The returned amount from the API
 * @param maxCount - The amount of events we want to show
 * @returns A list of events in the desired amount to fit rigth in the UI
 */
export function getUniqueEvents(events: Event[], maxCount: number = 9): Event[] {
  const seenNames = new Set<string>();
  const uniqueEvents: Event[] = [];

  for (const event of events) {
    if (!seenNames.has(event.name)) {
      seenNames.add(event.name);
      uniqueEvents.push(event);
      if (uniqueEvents.length >= maxCount) {
        break;
      }
    }
  }

  return uniqueEvents;
}

/**
 * Fetch products from a specific category
 * @returns Promise with event's data for the site's showcase
 */
export async function getEventsShowcase(): Promise<EventsRes> {
  try {
    const response = await fetch(`${baseurl}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: EventsRes = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error(
      `Failed to fetch events: ${error instanceof Error ? error.message : String(error)
      }`
    );
  }
};

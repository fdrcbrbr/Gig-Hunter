import { EventsRes} from "@/lib/interfaces";

const apiKey = process.env.API_KEY_TICKET;

const baseurl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&size=100`;

/**
 * Fetch events according the baseUrl (any event in Sweden)
 * @returns Promise with all the events in Sweden as the Api lists
 */
export async function getEvents(): Promise<EventsRes> {
  try {
    const response = await fetch(`${baseurl}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}&countryCode=SE`);
    }
    const data: EventsRes = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error(
      `Failed to fetch events: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Fetch events according to a selected city
 * @param city - The city name (e.g., 'stockholm', 'uppsala')
 * @param country - Refine the research to a specific country (optional)
 * @returns Promise with Promise with event's data
 */
export async function getEventsByCity(city: string, country?: string): Promise<EventsRes> {
  try {
    const response = await fetch(`${baseurl}&city=${city}&countryCode=${country}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: EventsRes = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error(
      `Failed to fetch events: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Fetch events using the keyword function of the API
 * @param keyword - Works filtering words city, band, and so on
 * @param country - Refine the research to a specific country (optional)
 * @returns Promise with Promise with event's data
 */
export async function getEventsByKeyword(query: string, country?: string): Promise<EventsRes> {
  try {
    const url = `${baseurl}&keyword=${query}&countryCode=${country}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: EventsRes = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error(
      `Failed to fetch events: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}


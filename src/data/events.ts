import { EventsRes} from "@/lib/interfaces";

const apiKey = process.env.API_KEY_TICKET;

const baseurl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&countryCode=SE`;

/**
 * Fetch events according the baseUrl (any event in Sweden)
 * @returns Promise with all the events in Sweden as the Api lists
 */
export async function getEvents(): Promise<EventsRes> {
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
      `Failed to fetch events: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

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
      `Failed to fetch events: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Fetch events using the keyword function of the API
 * @param keyword - Works filtering words city, band, and so on
 * @returns Promise with Promise with event's data
 */
export async function getEventsByKeyword(query: string): Promise<EventsRes> {
  try {

    const url = `${baseurl}&keyword=${encodeURIComponent(query)}`;

    console.log("Fetching events from URL:", url); 

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: EventsRes = await response.json();
    console.log("API response:", data); 
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


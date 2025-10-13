import { EventsRes} from "@/lib/interfaces";

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
      `Failed to fetch events: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Fetch events for the showcase (20 events)
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
      `Failed to fetch events: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Fetch events using the keyword function of the API
 * @param keyword - Could be a city, an artist or part of a word
 * @returns Promise with Promise with event's data
 */
export async function getEventsByKeyword(keyword: string): Promise<EventsRes> {
  try {
    const response = await fetch(`${baseurl}&locale=*&keyword=${keyword}`);
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

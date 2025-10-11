import {EventsRes} from "@/data/interfaces";

const apiKey = process.env.API_KEY_TICKET;

const baseurl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&countryCode=SE`;


/**
 * Fetch products from a specific category
 * @param city - The city name (e.g., 'stockholm', 'uppsala')
 * @returns Promise with product data
 */
export async function getEventsByCity(city?: string): Promise<EventsRes> {
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

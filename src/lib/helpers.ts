import {Event} from "@/lib/interfaces";

/**
 * Helper for fetching of a desired amount number of events 
 * @param events - The returned amount from the API
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
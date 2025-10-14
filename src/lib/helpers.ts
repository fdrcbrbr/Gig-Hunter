import {Event} from "@/lib/interfaces";

/**
 * Helper for avoiding duplicates in the showcase
 * @param events - The returned events from the API
 * @returns A list of events with any artist only once
 */
export function getUniqueEvents(events: Event[]): Event[] {
  const seenNames = new Set<string>();
  const uniqueEvents: Event[] = [];

  for (const event of events) {
    if (!seenNames.has(event.name)) {
      seenNames.add(event.name);
      uniqueEvents.push(event);
    }
  }
  return uniqueEvents;
}
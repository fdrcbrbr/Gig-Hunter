export interface EventImage {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

export interface EventAttraction {
  name: string;
  type?: string;
  id?: string;
  url?: string;
}

export interface EventVenue {
  name: string;
    city: {
    name: string;
  };
  country: string;
  address: string;
  location: {
    longitude: string;
    latitude: string;
  };
}

export interface EventsRes {
  _embedded: {
    events: Event[];
  };
  page: {
    totalElements: number;
  };
}


export interface Event {
  name: string;
  id: string;
  url: string;
  images: EventImage[];
  dates: {
    start: {
      localDate: string;
      localTime: string;
    };
  };
  classifications: Array<{
    genre: { name: string };
    subGenre: { name: string };
  }>;
  _embedded: {
    venues: EventVenue[];
    attractions?: EventAttraction[];
  };
}

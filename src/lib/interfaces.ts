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

export interface EventClassification {
  genre: {
    id: string;
    name: string;
  };
  subGenre?: {
    id: string;
    name: string;
  };
}


export interface Event {
  name: string;
  id: string;
  url: string;
  description: string;
  images: EventImage[];
  dates: {
    start: {
      localDate: string;
      localTime: string;
    };
  };
  classifications: EventClassification[];
  _embedded: {
    venues: EventVenue[];
    attractions?: EventAttraction[];
  };
}

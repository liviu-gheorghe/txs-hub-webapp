import { Location } from "./Location";

export interface Event {
  id?: string,
  eventTitle: string;
  eventDescription: number;
  eventStartDateTime: number;
  eventEndDateTime: string;
  locations?: Location[];
  eventImageURL?: string;
}

import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-events.component.html'
})
export class FetchEventsComponent {
  public events: Event[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Event[]>(baseUrl + 'api/events').subscribe(result => {
      this.events = result;
    }, error => console.error(error));
  }
}

interface Event {
  eventTitle: string;
  eventDescription: number;
  eventStartDateTime: number;
  eventEndDateTime: string;
}

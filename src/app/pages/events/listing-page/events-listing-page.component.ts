import {Component, OnInit} from '@angular/core';
import {Event} from "../../../data/interfaces/Event";
import {EventService} from "../../../core/services/event.service";

@Component({
  selector: 'events-page',
  templateUrl: './events-listing-page.component.html'
})
export class EventsListingPageComponent implements OnInit {
  public events: Event[] = [];

  constructor(private readonly eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((data: Array<Event>) => {
      this.events = data;
    }, error => console.error(error))
  }
}

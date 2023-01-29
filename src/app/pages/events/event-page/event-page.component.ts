import { Component, OnInit } from '@angular/core';
import { Event } from "../../../data/interfaces/Event";
import { EventService } from "../../../core/services/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'events-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['event-page.component.css']
})
export class EventPageComponent implements OnInit {
  public event?: Event;
  public eventId: string = '';

  constructor(private readonly route: ActivatedRoute, private readonly eventService: EventService) {
  }

  ngOnInit() {
    this.eventId = this.route.snapshot.params.eventId;

    this.eventService.getEventById(this.eventId).subscribe((data: Event) => {
      this.event = data;
    }, error => console.error(error))
  }
}

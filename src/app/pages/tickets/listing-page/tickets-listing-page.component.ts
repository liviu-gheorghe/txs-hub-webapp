import {Component, OnInit} from '@angular/core';
import {Ticket} from "../../../data/interfaces/Ticket";
import {TicketService} from "../../../core/services/ticket.service";

@Component({
  selector: 'tickets-page',
  templateUrl: './tickets-listing-page.component.html'
})
export class TicketsListingPageComponent implements OnInit {
  public tickets: Ticket[] = [];

  constructor(private readonly ticketService: TicketService) {
  }

  ngOnInit() {
    this.ticketService.getAllTickets().subscribe((data: Array<Ticket>) => {
      this.tickets = data;
    }, error => console.error(error))
  }
}

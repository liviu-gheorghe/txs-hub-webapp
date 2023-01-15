import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'tickets-page',
  templateUrl: './fetch-tickets.component.html'
})
export class FetchTicketsComponent {
  public tickets: Ticket[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Ticket[]>(baseUrl + 'api/tickets').subscribe(result => {
      this.tickets = result;
    }, error => console.error(error));
  }
}

interface Ticket {
  id?: string,
  ticketPrice: number,
  ticketDetails?: string,
  ticketCategory?: string,
  customerId: string,
  eventId: string,
  purchaseDateTime: string,
  dateCreated?: string,
  dateModified?: string
}

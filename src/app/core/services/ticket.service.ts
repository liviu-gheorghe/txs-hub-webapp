import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Ticket} from "../../data/interfaces/Ticket";
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly apiRoute = 'tickets';

  constructor(private readonly apiService: ApiService) { }

  getAllTickets(): Observable<Array<Ticket>> {
    return this.apiService.get(this.apiRoute);
  }

  getTicketById(id: string): Observable<Ticket> {
    return this.apiService.get(this.apiRoute, {id});
  }

  deleteTicketById(ticketId: string): Observable<any> {
    return this.apiService.delete(`${this.apiRoute}/${ticketId}`);
  }
}

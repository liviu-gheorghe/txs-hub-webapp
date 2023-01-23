import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Event} from "../../data/interfaces/Event";
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly apiRoute = 'events';

  constructor(private readonly apiService: ApiService) { }

  getAllEvents(): Observable<Array<Event>> {
    return this.apiService.get(this.apiRoute);
  }

  getEventById(id: string): Observable<Event> {
    return this.apiService.get(this.apiRoute, {id});
  }

  deleteEventById(eventId: string): Observable<any> {
    return this.apiService.delete(`${this.apiRoute}/${eventId}`);
  }
}

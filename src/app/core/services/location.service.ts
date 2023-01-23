import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Location} from "../../data/interfaces/Location";
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly apiRoute = 'locations';

  constructor(private readonly apiService: ApiService) { }

  getAllLocations(): Observable<Array<Location>> {
    return this.apiService.get(this.apiRoute);
  }

  getLocationById(id: string): Observable<Location> {
    return this.apiService.get(this.apiRoute, {id});
  }

  deleteLocationById(ticketId: string): Observable<any> {
    return this.apiService.delete(`${this.apiRoute}/${ticketId}`);
  }
}

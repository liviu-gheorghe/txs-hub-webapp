import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'Locations-page',
  templateUrl: './locations-listing-page.component.html'
})
export class LocationsListingPageComponent {
  public locations: Location[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Location[]>(baseUrl + 'api/locations').subscribe(result => {
      this.locations = result;
    }, error => console.error(error));
  }
}

interface Location {
  id?: string,
  country: string,
  region?: string,
  county?: string,
  city?: string,
  zipCode?: string,
  address?: string,
  latitude?: number,
  longitude?: number
}

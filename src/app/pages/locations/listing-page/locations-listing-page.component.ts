import { Component } from '@angular/core';
import {Location} from "../../../data/interfaces/Location";
import {LocationService} from "../../../core/services/location.service";

@Component({
  selector: 'Locations-page',
  templateUrl: './locations-listing-page.component.html'
})
export class LocationsListingPageComponent {
  public locations: Location[] = [];

  constructor(private readonly locationService: LocationService) {
  }

  ngOnInit() {
    this.locationService.getAllLocations().subscribe((data: Array<Location>) => {
      this.locations = data;
    }, error => console.error(error))
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import {FooterComponent} from "./components/footer/footer.component";
import { HomeComponent } from './home/home.component';

// Authorization

import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';

// Listing pages
import { EventsListingPageComponent } from './pages/events/listing-page/events-listing-page.component';
import { TicketsListingPageComponent } from './pages/tickets/listing-page/tickets-listing-page.component';
import { LocationsListingPageComponent } from './pages/locations/listing-page/locations-listing-page.component';


// Pricing Page

import {PricingPageComponent} from "./pages/pricing/pricing-page/pricing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    EventsListingPageComponent,
    TicketsListingPageComponent,
    LocationsListingPageComponent,
    PricingPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'events', component: EventsListingPageComponent, canActivate: [AuthorizeGuard] },
      { path: 'tickets', component: TicketsListingPageComponent, canActivate: [AuthorizeGuard] },
      { path: 'locations', component: LocationsListingPageComponent, canActivate: [AuthorizeGuard] },
      { path: 'pricing', component: PricingPageComponent },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LocationComponent } from './components/location/location.component';
import { ExtraComponent } from './components/extra/extra.component';
import { ResultComponent } from './components/result/result.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    ReservationComponent,
    ContactUsComponent,
    LocationComponent,
    ExtraComponent,
    ResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
 }

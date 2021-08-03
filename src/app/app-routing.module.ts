import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AboutUsComponent} from './components/about-us/about-us.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {ExtraComponent} from './components/extra/extra.component';
import {HomeComponent} from './components/home/home.component';
import {LocationComponent} from './components/location/location.component';
import {MenuComponent} from './components/menu/menu.component';
import {ReservationComponent} from './components/reservation/reservation.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'aboutUs',
    component:AboutUsComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'reservation',
    component:ReservationComponent
  },
  {
    path:'contactUs',
    component:ContactUsComponent
  },
  {
    path:'location',
    component:LocationComponent
  },
  {
    path:'extra',
    component:ExtraComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

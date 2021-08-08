import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

 myEvent(evt : any)
 {
   console.log(evt)
 }

  constructor() { }

  ngOnInit(): void {
  }

}

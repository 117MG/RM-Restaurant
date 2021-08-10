import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  currentVal : any = "";
  

 myEvent(evt : any)
 {
   console.log(evt);
   this.currentVal = evt ;
 }

 

  constructor(private userss : UsersService) { }
  message="ramesh";
  ngOnInit(): void {
    
    this.userss.setMessage(this.message);
  }

}

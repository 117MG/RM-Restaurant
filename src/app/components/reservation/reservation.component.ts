import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  /* 
  currentVal : any = "";
  

 myEvent(evt : any)
 {
   console.log(evt);
   this.currentVal = evt ;
 }
*/
 
 form : any;

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { 

    this.form = new FormGroup(
      {
        name:new FormControl("",Validators.required),
        email:new FormControl("",Validators.required),
        number:new FormControl("",Validators.required)

      }
    )
  }

  //from services
  //message="ramesh";

  ngOnInit(): void {
    
    //this.userss.setMessage(this.message);
  }

  saveCall()
  {
    let data:any=this.form.value;
    this.router.navigate(['../result'],{
      queryParams:{data:btoa(JSON.stringify(data))}
    })
  }

}

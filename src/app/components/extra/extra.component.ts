import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {
  message:string="";
  constructor(private userss : UsersService) { }

  ngOnInit(): void {
    this.message = this.userss.getMessage();
  }

}

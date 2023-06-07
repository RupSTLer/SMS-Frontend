import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { StudentService } from '../_services/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  
  }

}

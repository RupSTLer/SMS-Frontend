import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { UserDetails } from '../entities/userDetails';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message: string;
  
  // constructor(private userService: UserService) { 
  // }

  ngOnInit(): void {

  }


  // forUser()
  // {
  //   this.userService.forUser().subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.message = response;
  //     }
  //   );
  // }



}

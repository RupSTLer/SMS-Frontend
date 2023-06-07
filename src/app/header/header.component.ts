import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../_services/notification.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
import { UserDetails } from '../entities/userDetails';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "headerapp";
  @Input()
  username: string;
  nameofUser: string;
  userDetails: UserDetails = new UserDetails();
  

  constructor(
    private userAuthService: UserAuthService,  
    private router: Router, 
    public userService: UserService,
    private notify: NotificationService,
    ) {
    }
  
  ngOnInit(): void {
  }


  //used to check whether user logged in or not
  public isLoggedIn()
  {
    return this.userAuthService.isLoggedIn();   //returns true or false
  }

  //clearing the localStorage means role and token are not stored anymore so currently logged in user is no more valid, so it can be considered as loggedOUT
  public logout()
  {
    this.userAuthService.clear();
    this.router.navigate(['/login']);   //after logging out, it will redirect to login page
    this.notify.showSuccess(this.username + " logged out");
  }
  
  public isAdmin()
  {
    return this.userAuthService.isAdmin(); 
  }

  public isUser()
  {
    return this.userAuthService.isUser(); 
  }

}

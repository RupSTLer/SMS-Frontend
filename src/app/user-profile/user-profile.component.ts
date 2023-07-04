import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../entities/userDetails';
import { User } from '../entities/user';
import { UserService } from '../_services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  username: string;
  userDetails: UserDetails = new UserDetails();
  allDetails: User = new User();
  user: User = new User();
  hide = true;
  
  constructor(
    public userService: UserService,
    private notify: NotificationService
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  profile = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,}')]),
    userPassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{5,}')]),
    userID: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    age: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required, Validators.pattern('')]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 .,-]+$')]),
    phoneNo: new FormControl('', [Validators.required, Validators.pattern('(0|91)?[6-9][0-9]{9}')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]),
    classe: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]),
    section: new FormControl('', [Validators.required, Validators.pattern('[A-D]')]),
    department: new FormControl('', [Validators.required, Validators.pattern('[A-D]')]),

  });

  // isFieldInvalid(fieldName: string)
  // {
  //   const field = this.profile.get(fieldName);
  //   return field?.touched && field.invalid;
  // }

  // getter for validation
  get userName() {
    return this.profile.get('userName');
  }
  get userPassword() {
    return this.profile.get('userPassword');
  }
  get userID() {
    return this.profile.get('userID');
  }
  get name() {
    return this.profile.get('name');
  }
  get studentID() {
    return this.profile.get('studentID');
  }
  get age() {
    return this.profile.get('age');
  }
  get birthDate() {
    return this.profile.get('birthDate');
  }
  get gender() {
    return this.profile.get('gender');
  }
  get address() {
    return this.profile.get('address');
  }
  get phoneNo() {
    return this.profile.get('phoneNo');
  }
  get email() {
    return this.profile.get('email');
  }
  get classe() {
    return this.profile.get('classe');
  }
  get section() {
    return this.profile.get('section');
  }
  get department() {
    return this.profile.get('department');
  }


  updateProfile() {
    console.log("mine"+this.allDetails.userID);
    var ans = confirm("Are you sure to UPDATE the profile details?");
    if (ans) {
      this.userService.updateUserDetails(this.allDetails.userID, this.user).subscribe(data => {
        if(data = "Profile details updated")
        {
          this.notify.showSuccess(this.user.userName + " - Profile details updated");
          location.reload();
        }
        else
        {
          this.notify.showError(data);
        }
      });
    }
  }


  getUserDetails() {
    this.userService.getUserDetails().subscribe(
      data => {
        // console.log(data);
        this.userDetails = data;
        // console.log(this.userDetails.username);
        this.getAllDetailsByUserName(this.userDetails.username);
        // console.log(this.allDetails.userID);
      }
    );
  }

  getAllDetailsByUserName(username: string) {
    this.userService.getAllDetailsByUserName(username).subscribe(
      data => {
        this.allDetails = data;
        this.getUserByUserID(this.allDetails.userID);
      }
    );
  }

  getUserByUserID(userID: string) 
  {
    this.userService.getUserByUserID(userID).subscribe(data => {
      this.user = <User>data;
      console.log(this.user);
    });
  }


}


        // this.profile.patchValue({
        //   userName: this.allDetails.userName || '',
        //   userPassword: this.allDetails.userPassword || '',
        //   userID: this.allDetails.userID || '',
        //   name: this.allDetails.name || '',
        //   // age: this.allDetails.age || '',
        //   birthDate: this.allDetails.birthDate || '',
        //   gender: this.allDetails.gender || '',
        //   address: this.allDetails.address || '',
        //   phoneNo: this.allDetails.phoneNo || '',
        //   email: this.allDetails.email || '',
        //   classe: this.allDetails.classe || '',
        //   section: this.allDetails.section || '',
        //   department: this.allDetails.department || '',

        // });

        
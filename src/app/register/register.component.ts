import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { NotificationService } from '../_services/notification.service';
import { Role, User } from '../entities/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  hide = true;
  user: User = new User();
  
  constructor(
    private userService: UserService, 
    private router: Router,
    private notify: NotificationService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,}')]),
    userPassword: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{5,}')]),
    // userID: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    age: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required, Validators.pattern('')]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 .,-]+$')]),
    phoneNo: new FormControl('', [Validators.required, Validators.pattern('(0|91)?[6-9][0-9]{9}')]),
    email: new FormControl('',[Validators.required, Validators.email, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]),
    classe: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]),
    section: new FormControl('', [Validators.required, Validators.pattern('[A-D]')]),
    department: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]),
    role: new FormControl('', [Validators.required]),

  });



  // getter for validation
  get userName()
  {
    return this.registerForm.get('userName');
  }
  get userPassword()
  {
    return this.registerForm.get('userPassword');
  }
  // get userID()
  // {
  //   return this.registerForm.get('userID');
  // }
  get name()
  {
    return this.registerForm.get('name');
  }
  get age()
  {
    return this.registerForm.get('age');
  }
  get birthDate()
  {
    return this.registerForm.get('birthDate');
  }
  get gender()
  {
    return this.registerForm.get('gender');
  }
  get address()
  {
    return this.registerForm.get('address');
  }
  get phoneNo()
  {
    return this.registerForm.get('phoneNo');
  }
  get email()
  {
    return this.registerForm.get('email');
  }
  get classe()
  {
    return this.registerForm.get('classe');
  }
  get section()
  {
    return this.registerForm.get('section');
  }
  get department() {
    return this.registerForm.get('department');
  }
  get role() {
    return this.registerForm.get('role');
  }

  register() 
  {
    const rolName:any = this.registerForm.get('role')?.value;
    const role: Role[] = [{ roleName: rolName, roleDescription: ''}];
    // const roles: Set<Role> = new Set<Role>();
    // roles.add(role);
    // roles.add({ roleName: roleNa});
    const user:any = { ...this.registerForm.value, role};
    console.log(user);
    console.log("role "+ rolName);
    this.userService.register(user, rolName).subscribe(
      (response) => {
      console.log(response);
      if(response === "User registered successfully")
      {
        this.notify.showSuccess("Registered Successfully!")
        this.router.navigate(['/login']);
      }
      else
      {
        this.notify.showError(response);
      }
    }
    );
  }

}

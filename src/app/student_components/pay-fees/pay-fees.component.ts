import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeeService } from '../../_services/fee.service';
import { NotificationService } from '../../_services/notification.service';
import { UserService } from '../../_services/user.service';
import { Fee } from '../../entities/fee';
import { User } from '../../entities/user';
import { UserDetails } from '../../entities/userDetails';

@Component({
  selector: 'app-pay-fees',
  templateUrl: './pay-fees.component.html',
  styleUrls: ['./pay-fees.component.css']
})

export class PayFeesComponent implements OnInit {

  stuName: string;
  username: string;
  userDetails: UserDetails = new UserDetails();
  fee: Fee = new Fee();
  allDetails: User = new User();
  currentYear: string = new Date().getFullYear().toString();
  currentMonth: string = new Date().toLocaleString('default', {month: 'long'});

  currentMonthNo: string = (new Date().getMonth() + 1).toString();
  curdate = (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();

  constructor(private fb: FormBuilder,
    private feeService: FeeService,
    private router: Router,
    private notify: NotificationService,
    private userService: UserService) { }


  ngOnInit(): void {
    this.getUserDetails();
  }

  payFeesForm = new FormGroup({
    studentId: new FormControl('', [Validators.required, Validators.pattern('^[SMS]{3}[0-9]{3}$')]),
    studentName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2}[a-zA-Z ]+')]),
    feeType: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+[\.]?[0-9]{0,2}$')]),
    // paymentType: new FormControl('', Validators.required),
  });

  // getter for validation
  get studentId() {
    return this.payFeesForm.get('studentId');
  }
  get studentName() {
    return this.payFeesForm.get('studentName');
  }
  get feeType() {
    return this.payFeesForm.get('feeType');
  }
  get duration() {
    return this.payFeesForm.get('duration');
  }
  get amount() {
    return this.payFeesForm.get('amount');
  }
  // get paymentType() {
  //   return this.payFeesForm.get('paymentType');
  // }

  fillAmount()
  {
    if(this.fee.feeType === 'Monthly')
    {
      this.fee.amount = 999;
    }
    if(this.fee.feeType === 'Quarterly')
    {
      this.fee.amount = 999*3;
    }
    if(this.fee.feeType === 'Yearly')
    {
      this.fee.amount = 999*12;
    }
  }

  fillYear()
  {
    this.fee.duration = this.currentYear;
    console.log(this.currentYear);
  }
  fillMonth()
  {
    this.fee.duration = this.currentMonth;
    console.log(this.currentMonth);
  }
  fillQuarter()
  {
    const month = new Date().getMonth() + 1; 
    const currentQuarter:number = (month / 3);
    this.fee.duration = 'Q' + Math.ceil(currentQuarter);
    console.log(currentQuarter);
  }
  
  payFees() {
    this.feeService.payFees(this.fee).subscribe(
      response => {
        console.log(response);
        if (response === "Fees paid successfully..") 
        {
          this.notify.showSuccess("Fees paid successfully");
          this.router.navigate(['/studentDashboard']);
        }
        else
        {
          this.notify.showError(response);
        }
      }
    );
  }
  

  getUserDetails()
  {
    this.userService.getUserDetails().subscribe(
      data => {
        // console.log(data);
        this.userDetails = data;
        // console.log(this.userDetails.username);
        this.getAllDetailsByUserName(this.userDetails.username);
      },
    );
  }

  getAllDetailsByUserName(username: string)
  {
    this.userService.getAllDetailsByUserName(username).subscribe(
      data =>
      {
        // console.log(data);
        this.allDetails = data;
        console.log(this.allDetails);
        console.log(this.allDetails.email);
        console.log(this.allDetails.userID);

        this.payFeesForm.patchValue({
          studentName: this.allDetails.name || '',
          studentId: this.allDetails.userID || ''

        });

      }
    );
  }



}

import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StudentService } from '../../_services/student.service';
import { TeacherService } from '../../_services/teacher.service';
import { UserService } from '../../_services/user.service';
import { User } from '../../entities/user';
import { UserDetails } from '../../entities/userDetails';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {

  username: string;
  gender: string
  studentName: string
  userDetails: UserDetails = new UserDetails();
  allDetails: User = new User();
  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private userService: UserService,
    private observer: BreakpointObserver
    ) {}

  ngOnInit(): void {
    this.getUserDetails();
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
        this.allDetails = data;
        this.studentName = this.allDetails.name;
        this.gender = this.allDetails.gender;
        console.log(this.allDetails);
        console.log(this.allDetails.gender);
      }
    );
  }


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res: any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

  }
}


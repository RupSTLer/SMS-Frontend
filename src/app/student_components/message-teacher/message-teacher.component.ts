import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../_services/message.service';
import { NotificationService } from '../../_services/notification.service';
import { TeacherService } from '../../_services/teacher.service';
import { UserService } from '../../_services/user.service';
import { Message } from '../../entities/message';
import { Teacher } from '../../entities/teacher';
import { User } from '../../entities/user';
import { UserDetails } from '../../entities/userDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-teacher',
  templateUrl: './message-teacher.component.html',
  styleUrls: ['./message-teacher.component.css']
})
export class MessageTeacherComponent implements OnInit{

  id: number;
  msg: Message = new Message();
  teacher: Teacher;
  sendMessageForm: FormGroup;
  teachers: Teacher[]=[];
  maxChars = 100;

  username: string;
  userDetails: UserDetails = new UserDetails();
  allDetails: User = new User();

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private router: Router,
    private userService: UserService,
    private messageSer: MessageService,
    private notify: NotificationService,
    ) { }

  ngOnInit(): void {
    this.getUserDetails();

    this.sendMessageForm = this.formBuilder.group({
      teacher: ['', Validators.required],
      message: ['', Validators.required]
    });
    // this.id = this.route.snapshot.params['id'];

    // this.teachers = new Teacher();

    // this.route.params.subscribe(param => {
    //   this.id = param['id'];
    // });
    // this.teacherService.getTeacherById(this.id).subscribe( (data:any) => {
    //    this.teachers = data;
    // });

    this.teacherService.listAllTeachers().subscribe(data => {
      this.teachers = data;
   });

  }

  addMsg()
  {
    // this.msg.senderId = localStorage.getItem('userID')?.toString();
    this.msg.senderId = this.allDetails.userID;
    this.messageSer.addMessage(this.msg).subscribe( (data:any) => {
      // console.log(data);
      // this.msg = data;
    });  

    this.notify.showSuccess("Message sent successfully..");
    this.router.navigate(['/studentDashboard']);
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
        // console.log(this.allDetails);
        // console.log(this.allDetails.email);
        // console.log(this.allDetails.userID);
        // localStorage.setItem('userID', this.allDetails.userID);
        // this.addMsg(this.allDetails.userID);
      }
    );
  }

}

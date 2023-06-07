import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from '../../_services/message.service';
import { NotificationService } from '../../_services/notification.service';
import { Message } from '../../entities/message';
import { UserDetails } from '../../entities/userDetails';
import { User } from '../../entities/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-received-msgs',
  templateUrl: './received-msgs.component.html',
  styleUrls: ['./received-msgs.component.css']
})
export class ReceivedMsgsComponent implements OnInit {

  myMsgs: Message[]=[];
  userDetails: UserDetails = new UserDetails();
  allDetails: User = new User();

  displayedColumns: string[] = ['id','senderId', 'receiverId', 'message', 'time'];
  dataSource = new MatTableDataSource<Message>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private msgService: MessageService, 
    private notify: NotificationService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getMsgsByReceiverId(receiverId: string) {
    this.msgService.getMsgByReceiverId(receiverId).subscribe( data => {
      console.log(data);
      console.log(receiverId);
      this.myMsgs = data;
    });
  }

  getUserDetails()
  {
    this.userService.getUserDetails().subscribe(
      data => {
        this.userDetails = data;
        // console.log(data);
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
        // console.log(this.allDetails);
        // console.log(this.allDetails.userID);
        this.getMsgsByReceiverId(this.allDetails.userID);
      }
    );
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../_services/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { of} from 'rxjs';
import { FeeService } from '../../_services/fee.service';
import { MessageService } from '../../_services/message.service';

import { MyMsgsComponent } from './my-msgs.component';

describe('MyMsgsComponent', () => {
  let component: MyMsgsComponent;
  let fixture: ComponentFixture<MyMsgsComponent>;
  let msgService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMsgsComponent],
      providers: [HttpClient, HttpHandler, FeeService, MatSnackBar, NotificationService],
      imports: [ToastrModule.forRoot()],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyMsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    msgService = TestBed.inject(MessageService);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the mocked message list using getMsgBySenderId method', () => {
    const stuId = "SMS003";
    //mocking the fee service method
    const msgServiceSpy = jest
      .spyOn(msgService, 'getMsgBySenderId')
      .mockReturnValue(of([
        {
          id: 3,
          senderId: stuId,
          receiverId: "SMT005",
          message: "query on microservices",
          time: "23-05-2023 17:30"
        },

        {
          id: 2,
          senderId: stuId,
          receiverId: "SMT003",
          message: "query on DBMS",
          time: "27-05-2023 13:30"
        }
      ]));

    //triggering the function
    const mockService = msgService.getMsgBySenderId(stuId).toPromise();

    //expecting the msg service method to be called
    expect(mockService).resolves.toEqual(
      [
        {
          id: 3,
          senderId: "SMS003",
          receiverId: "SMT005",
          message: "query on microservices",
          time: "23-05-2023 17:30"
        },

        {
          id: 2,
          senderId: "SMS003",
          receiverId: "SMT003",
          message: "query on DBMS",
          time: "27-05-2023 13:30"
        }
      ]
    );
  });

});

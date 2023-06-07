import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../_services/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { of} from 'rxjs';
import { FeeService } from '../../_services/fee.service';
import { MessageService } from '../../_services/message.service';
import { ReceivedMsgsComponent } from './received-msgs.component';

describe('ReceivedMsgsComponent', () => {
  let component: ReceivedMsgsComponent;
  let fixture: ComponentFixture<ReceivedMsgsComponent>;
  let msgService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceivedMsgsComponent],
      providers: [HttpClient, HttpHandler, FeeService, MatSnackBar, NotificationService],
      imports: [ToastrModule.forRoot()],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReceivedMsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    msgService = TestBed.inject(MessageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the mocked message list using getMsgByReceiverId method', () => {
    const stuId = "SMS003";
    //mocking the fee service method
    const msgServiceSpy = jest
      .spyOn(msgService, 'getMsgByReceiverId')
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
    const mockService = msgService.getMsgByReceiverId(stuId).toPromise();

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

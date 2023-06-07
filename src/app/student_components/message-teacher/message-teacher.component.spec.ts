import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTeacherComponent } from './message-teacher.component';
import { StudentService } from '../../_services/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../_services/notification.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from '../../_services/message.service';
import { of } from 'rxjs';

describe('MessageTeacherComponent', () => {
  let component: MessageTeacherComponent;
  let fixture: ComponentFixture<MessageTeacherComponent>;
  let msgService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [MessageTeacherComponent],
        providers: [HttpClient, HttpHandler, StudentService, MatSnackBar, NotificationService],
        imports: [ToastrModule.forRoot()],
    })
        .compileComponents();

    fixture = TestBed.createComponent(MessageTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    msgService = TestBed.inject(MessageService);
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should save the message to the backend', () => {
    //mocking the addmessage method of message service
    const msgServiceSpy = jest.spyOn(msgService, 'addMessage').mockReturnValueOnce(of({message: 'Message sent successfully..'}));

    const mockData = {    
      id: 2,
      senderId: "SMS003",
      receiverId: "SMT006",
      message: "Hello sir",
      time: "30-05-2023 20:29",
    };

    const mockService = msgService.addMessage(mockData).toPromise();

    expect(msgServiceSpy).toHaveBeenCalledWith(mockData);
    expect(mockService).resolves.toEqual(of('Message sent successfully..'));
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../_services/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { of} from 'rxjs';
import { LeaveService } from '../../_services/leave.service';

import { MyLeavesComponent } from './my-leaves.component';

describe('MyLeavesComponent', () => {
  let component: MyLeavesComponent;
  let fixture: ComponentFixture<MyLeavesComponent>;
  let leaveService: LeaveService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyLeavesComponent],
      providers: [HttpClient, HttpHandler, LeaveService, MatSnackBar, NotificationService],
      imports: [ToastrModule.forRoot()],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    leaveService = TestBed.inject(LeaveService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the mocked leaves list using listLeaves method', () => {
    const stuId = "SMS003";
    //mocking the leave service method
    const leaveServiceSpy = jest
      .spyOn(leaveService, 'getLeaveDetailsByStudentId')
      .mockReturnValue(of([
        {
          id: 3,
          studentId: stuId,
          studentName: "Rupam",
          startDate: "2023-05-30",
          endDate: "2023-06-10",
          status: "pending",
          reason: "event",
          time: "29-05-2023 20:29",
        },

        {
          id: 4,
          studentId: stuId,
          studentName: "Rupam",
          startDate: "2023-05-30",
          endDate: "2023-06-02",
          status: "pending",
          reason: "sick",
          time: "28-05-2023 20:29",
        }
      ]));

    //triggering the function
    const mockService = leaveService.getLeaveDetailsByStudentId(stuId).toPromise();

    //expecting the leave service method to be called
    expect(mockService).resolves.toEqual(
      [
        {
          id: 3,
          studentId: "SMS003",
          studentName: "Rupam",
          startDate: "2023-05-30",
          endDate: "2023-06-10",
          status: "pending",
          reason: "event",
          time: "29-05-2023 20:29",
        },

        {
          id: 4,
          studentId: "SMS003",
          studentName: "Rupam",
          startDate: "2023-05-30",
          endDate: "2023-06-02",
          status: "pending",
          reason: "sick",
          time: "28-05-2023 20:29",
        }
      ]
    );
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../_services/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { of} from 'rxjs';
import { ListLeavesComponent } from './list-leaves.component';
import { LeaveService } from '../../_services/leave.service';


describe('ListLeavesComponent', () => {
  let component: ListLeavesComponent;
  let fixture: ComponentFixture<ListLeavesComponent>;
  let leaveService: LeaveService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListLeavesComponent],
      providers: [HttpClient, HttpHandler, LeaveService, MatSnackBar, NotificationService],
      imports: [ToastrModule.forRoot()],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    leaveService = TestBed.inject(LeaveService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the mocked leaves list using listLeaves method', () => {
    //mocking the leave service method
    const leaveServiceSpy = jest
      .spyOn(leaveService, 'listLeaves')
      .mockReturnValue(of([
        {
          id: 3,
          studentId: "SMS001",
          studentName: "Rupam",
          startDate: "2023-05-30",
          endDate: "2023-05-30",
          status: "pending",
          reason: "event",
          time: "30-05-2023 20:29",
        },

        {
          id: 4,
          studentId: "SMS002",
          studentName: "Ritam",
          startDate: "2023-05-30",
          endDate: "2023-06-02",
          status: "pending",
          reason: "sick",
          time: "30-05-2023 20:29",
        }
      ]));

    //triggering the ngOnInit lifecycle hook
    component.ngOnInit();

    //expecting the leave service method to be called
    expect(leaveServiceSpy).toHaveBeenCalledWith();

    //expecting the leave list to be populated
    expect(component.leaves).toEqual(
      [
        {
          id: 3,
          studentId: "SMS001",
          studentName: "Rupam",
          startDate: "2023-05-30",
          endDate: "2023-05-30",
          status: "pending",
          reason: "event",
          time: "30-05-2023 20:29",
        },

        {
          id: 4,
          studentId: "SMS002",
          studentName: "Ritam",
          startDate: "2023-05-30",
          endDate: "2023-06-02",
          status: "pending",
          reason: "sick",
          time: "30-05-2023 20:29",
        }
      ]
    );
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../_services/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { FeeService } from '../../_services/fee.service';

import { MyFeesComponent } from './my-fees.component';

describe('MyFeesComponent', () => {
  let component: MyFeesComponent;
  let fixture: ComponentFixture<MyFeesComponent>;
  let feeService: FeeService;

  beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [MyFeesComponent],
    providers: [HttpClient, HttpHandler, FeeService, MatSnackBar, NotificationService],
    imports: [ToastrModule.forRoot()],
  })
    .compileComponents();

  fixture = TestBed.createComponent(MyFeesComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  feeService = TestBed.inject(FeeService);
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the mocked fees list using getFeesByStudentId method', () => {
    //mocking the fee service method
    const stuId ='SMS001';
    const feeServiceSpy = jest
      .spyOn(feeService, 'getFeesByStudentId')
      .mockReturnValue(of([
        {
          id: 3,
          studentId: stuId,
          studentName:"Rupam Roy",
          feeType:"Monthly",
          amount: 3333,
          duration: "June",
          time: "30-05-2023 20:29",
        },

        {
          id: 4,
          studentId: stuId,
          studentName: "Rupam paul",
          feeType: "Monthly",
          amount: 6666,
          duration: "May",
          time: "30-05-2023 02:09"
        }
      ]));

    //triggering the function
    const mockService = feeService.getFeesByStudentId(stuId).toPromise();

    //expecting the fee service method to be called
    expect(mockService).resolves.toEqual(
      [
        {
          id: 3,
          studentId: "SMS001",
          studentName: "Rupam paul",
          amount: 3333,
          feeType: "Monthly",
          paymentType: "Cash",
          time: "30-05-2023 02:09"
        },

        {
          id: 4,
          studentId: "SMS002",
          studentName: "Ritam paul",
          amount: 6666,
          feeType: "Quaterly",
          paymentType: "Cash",
          time: "30-05-2023 02:09"
        }
      ]
    );
  });


});

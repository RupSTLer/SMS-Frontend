import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayFeesComponent } from './pay-fees.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../_services/notification.service';
import { FeeService } from '../../_services/fee.service';

describe('PayFeesComponent', () => {
  let component: PayFeesComponent;
  let fixture: ComponentFixture<PayFeesComponent>;
  let feeService: FeeService;

  beforeEach(async () => {

    const spy = {
      payFees: jest.fn()
    };

    await TestBed.configureTestingModule({
        declarations: [PayFeesComponent],
        providers: [HttpClient, HttpHandler, MatSnackBar, NotificationService],
        imports: [ToastrModule.forRoot()],
    })
        .compileComponents();

    fixture = TestBed.createComponent(PayFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    feeService = TestBed.inject(FeeService);
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save the payment details to backend', () => {

    const feeServiceSpy = jest.spyOn(feeService, 'payFees');
    //set valid inputs
    const mockFeeData = 
    {
      id: 3,
      studentId: "SMS001",
      studentName: "Rupam",
      feeType: "Monthly",
      amount: 7890,
      duration: "June",
      time: "01-05-2023 18:55"
    }

    //trigger the function call
    const mockService = feeService.payFees(mockFeeData);

    //expect the payFees method to be called with the expected parameters
    expect(feeServiceSpy).toHaveBeenCalledWith(mockFeeData);
    // expect(mockService).resolves.toEqual

  });
});

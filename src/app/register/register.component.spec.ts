import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { NotificationService } from '../_services/notification.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { TimerService } from '../_services/timer.service';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userService: UserService;
  let userAuthService: UserAuthService;
  let notify: NotificationService;
  let router2: Router;
  let http: HttpClient;
  let timerService: TimerService;
  let toastr: ToastrService;
  let snackBar: MatSnackBar;
  let router = {navigate: jest.mock};

  beforeEach(async () => {
    userService = new UserService(http, userAuthService, timerService, router2);
    notify = new NotificationService(snackBar, toastr);
    router = {navigate: jest.fn()};
    // router = new Router();
    // router = new Router(null, null, null, null, null, null, null, null);

    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [HttpClient, HttpHandler, MatSnackBar],
      imports: [ToastrModule.forRoot(), FormsModule, ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('register new user', () => {
      it('should call the register method from userService and navigate to login component', () => {
        //mock register method of userservice
        const registerData = { value: { name: 'Rupam Roy', email: 'rup@g.co', password: 'Rup@pass'}};
        const response = { success: true};
        const userServiceRegisterSpy = jest.spyOn(userService, 'register').mockReturnValueOnce(of(response));
        // const notifyServiceShowSuccessSpy = jest.spyOn(notify, 'showSuccess');
        // const routerNavigateSpy = jest.spyOn(router, 'navigate');

        const mockService = userService.register(registerData).toPromise();

        expect(userServiceRegisterSpy).toHaveBeenCalledWith(registerData);
        expect(mockService).resolves.toEqual(of(registerData));
        // expect(notifyServiceShowSuccessSpy).toHaveBeenCalledWith("Registered Successfully!");
        // expect(routerNavigateSpy).toHaveBeenCalledWith(['/login']);

      })
  })
});

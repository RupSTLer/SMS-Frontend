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
import { Role } from '../entities/user';

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
  let router = { navigate: jest.mock };

  beforeEach(async () => {
    userService = new UserService(http, userAuthService, timerService, router2);
    notify = new NotificationService(snackBar, toastr);
    router = { navigate: jest.fn() };
    // router = new Router();
    // router = new Router(null, null, null, null, null, null, null, null);

    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
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
      // const registerData = { value: { name: 'Rupam Roy', email: 'rup@g.co', password: 'Rup@pass'}};
      const response = { success: true };
      const userServiceRegisterSpy = jest.spyOn(userService, 'register').mockReturnValueOnce(of());
      // const notifyServiceShowSuccessSpy = jest.spyOn(notify, 'showSuccess');
      // const routerNavigateSpy = jest.spyOn(router, 'navigate');

      const registerData =
      {
        userName: "dhiman123",
        userPassword: "Dhiman@pass",
        userID: "SMS004",
        name: "Dhiman Das",
        age: 26,
        birthDate: "1992-06-13",
        gender: "Male",
        address: "Howrah",
        phoneNo: "6289045205",
        email: "dhiman@g.co",
        classe: "six",
        section: "A",
        department: "Science",
        role: new Set<Role>(
          [
            {
              roleName: "Teacher",
              roleDescription: "role for teacher"
            }
          ])
      };
      const role = 'Teacher';
      const mockService = userService.register(registerData, role).toPromise();

      expect(userServiceRegisterSpy).toHaveBeenCalledWith(registerData,role);
      expect(mockService).resolves.toEqual(of(registerData));
      // expect(notifyServiceShowSuccessSpy).toHaveBeenCalledWith("Registered Successfully!");
      // expect(routerNavigateSpy).toHaveBeenCalledWith(['/login']);

    })
  })
});

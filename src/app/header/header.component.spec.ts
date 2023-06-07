import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { NotificationService } from '../_services/notification.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { TimerService } from '../_services/timer.service';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';


// jest.mock('./userAuthService');
// jest.mock('@angular/router');

describe('ApplyLeaveComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let userAuthService: UserAuthService;

  beforeEach(async () => {
    userAuthService = new UserAuthService();
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [MatSnackBar, NotificationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'headerapp'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.componentInstance;
    expect(header.title).toEqual('headerapp');
  });


});

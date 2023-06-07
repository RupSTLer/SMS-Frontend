import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotificationService } from '../_services/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';
import { Expression } from '@angular/compiler';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        FormsModule,
      ],
      declarations: [LoginComponent],
      providers: [NotificationService,
        MatSnackBar]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the login form', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
    expect(compiled.querySelector('input[type="password"]')).toBeTruthy();
    expect(compiled.querySelector('input[type="submit"]')).toBeTruthy();
  });

  it('should submit the login form with valid credentials', () => {
    const compiled = fixture.nativeElement;

    const userNameInput = compiled.querySelector('input[type="text"]');
    const passwordInput = compiled.querySelector('input[type="password"]');
    const submitButton = compiled.querySelector('input[type="submit"]');

    jest.spyOn(component, 'login');

    userNameInput.value = 'anu14120';
    passwordInput.value = 'Anu@pass';

    userNameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    submitButton.click();

    expect(component.login).toHaveBeenCalled();

    //check the validity 
    expect(userNameInput.validity.valid).toBeTruthy();
    expect(passwordInput.validity.valid).toBeTruthy();



  });


});

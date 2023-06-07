import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../_services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTeacherComponent } from './update-teacher.component';
import { TeacherService } from '../../_services/teacher.service';

describe('UpdateTeacherComponent', () => {
  let component: UpdateTeacherComponent;
  let fixture: ComponentFixture<UpdateTeacherComponent>;
  let teacherService: TeacherService;

  const fakeActivatedRoute = {

  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTeacherComponent],
      providers: [HttpClient, HttpHandler, MatSnackBar, NotificationService, {provide: ActivatedRoute, useValue: fakeActivatedRoute}],
      imports: [ToastrModule.forRoot(), FormsModule, ReactiveFormsModule],
  })
      .compileComponents();

  fixture = TestBed.createComponent(UpdateTeacherComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  teacherService = TestBed.inject(TeacherService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateTeacher method with valid inputs', () => {

    const studentServiceSpy = jest.spyOn(teacherService, 'updateTeacher');
    //set valid inputs
    const teaId = "SMS003";
    const updateMockData = {
      teacherId: teaId,
      userName:"ralph123",
      password:"rup@pass",
      name:"Ralph Del",
      age: 14,
      birthDate: "2010-12-08",
      gender: "Male",
      address: "Howrah",
      phoneNo: "6345617893",
      email:"ralph@g.co",
      department: "ARTS",
    };

    const mockService = teacherService.updateTeacher(teaId, updateMockData).toPromise();

    // expect(studentServiceSpy).toHaveBeenCalledWith(updateMockData);
    expect(mockService).resolves.toEqual('details updated');

  });
});

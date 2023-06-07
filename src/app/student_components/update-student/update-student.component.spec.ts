import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentComponent } from './update-student.component';
import { StudentService } from '../../_services/student.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../_services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('UpdateStudentComponent', () => {
  let component: UpdateStudentComponent;
  let fixture: ComponentFixture<UpdateStudentComponent>;
  let studentService: StudentService;

  const fakeActivatedRoute = {

  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [UpdateStudentComponent],
        providers: [HttpClient, HttpHandler, StudentService, MatSnackBar, NotificationService, {provide: ActivatedRoute, useValue: fakeActivatedRoute}],
        imports: [ToastrModule.forRoot(), FormsModule, ReactiveFormsModule],
    })
        .compileComponents();

    fixture = TestBed.createComponent(UpdateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    studentService = TestBed.inject(StudentService);
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should call updateStudent method with valid inputs', () => {

    const studentServiceSpy = jest.spyOn(studentService, 'updateStudent');
    //set valid inputs
    const stuId = "SMS003";
    const updateMockData = {
      studentId: stuId,
      userName:"ralph123",
      password:"rup@pass",
      name:"Ralph Del",
      age: 14,
      birthDate: "2010-12-08",
      gender: "Male",
      address: "Howrah",
      phoneNo: "6345617893",
      email:"ralph@g.co",
      classe: "seven",
      section: "A",
    };

    const mockService = studentService.updateStudent(stuId, updateMockData).toPromise();

    // expect(studentServiceSpy).toHaveBeenCalledWith(updateMockData);
    expect(mockService).resolves.toEqual('details updated');

  });

});

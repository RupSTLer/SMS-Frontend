import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentComponent } from './view-student.component';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../_services/student.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;
  let studentService: StudentService;

  const fakeActivatedRoute = {

  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentComponent ],
      providers: [HttpClient, HttpHandler, StudentService,{provide: ActivatedRoute, useValue: fakeActivatedRoute}],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    studentService = TestBed.inject(StudentService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch student by studentId', () => {
    const stuId = 'SMS004';
    const studentMockData = {
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
    const studentServiceSpy = jest.spyOn(studentService, 'getStudentByStudentId').mockReturnValueOnce(of(studentMockData));

    const mockService = studentService.getStudentByStudentId(stuId).toPromise();

    // expect(studentServiceSpy).toHaveBeenCalledWith(stuId);
    expect(mockService).resolves.toEqual(studentMockData);

  });

  
});

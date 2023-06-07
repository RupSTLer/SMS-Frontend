import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTeacherComponent } from './view-teacher.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { TeacherService } from '../../_services/teacher.service';

describe('ViewTeacherComponent', () => {
  let component: ViewTeacherComponent;
  let fixture: ComponentFixture<ViewTeacherComponent>;
  let teacherService: TeacherService;

  const fakeActivatedRoute = {

  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTeacherComponent ],
      providers: [HttpClient, HttpHandler, TeacherService,{provide: ActivatedRoute, useValue: fakeActivatedRoute}],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    teacherService = TestBed.inject(TeacherService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch teacher by teacherId', () => {
    const teaId = 'SMT004';
    const teacherMockData = {
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
    const teacherServiceSpy = jest.spyOn(teacherService, 'getTeacherByTeacherId').mockReturnValueOnce(of(teacherMockData));

    const mockService = teacherService.getTeacherByTeacherId(teaId).toPromise();

    // expect(teacherServiceSpy).toHaveBeenCalledWith(teaId);
    expect(mockService).resolves.toEqual(teacherMockData);

  });
});

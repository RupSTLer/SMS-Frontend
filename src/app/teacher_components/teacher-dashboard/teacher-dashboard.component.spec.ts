import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherDashboardComponent } from './teacher-dashboard.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../_services/notification.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatSidenav } from '@angular/material/sidenav';

describe('TeacherDashboardComponent', () => {
  let component: TeacherDashboardComponent;
  let fixture: ComponentFixture<TeacherDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      declarations: [ TeacherDashboardComponent ],
      providers: [HttpClient, HttpHandler, MatSnackBar, NotificationService],
      imports: [ToastrModule.forRoot(), MatSidenav],
    })
    
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

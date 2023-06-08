import { TestBed } from '@angular/core/testing';
import { AutoLogOutService } from './auto-log-out.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';


describe('AutoLogOutService', () => {
  let service: AutoLogOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatSnackBar],
      imports: [ToastrModule.forRoot()]
    });
    service = TestBed.inject(AutoLogOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

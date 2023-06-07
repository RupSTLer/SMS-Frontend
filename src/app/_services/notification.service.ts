import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar,
    private toastr: ToastrService) { }

  config: MatSnackBarConfig = {
    duration: 1000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  }

  success(msg: string)
  {
    this.config['panelClass'] = ['notification', 'success', 'blue-snackbar'];
    this.snackBar.open(msg, '', this.config);
  }

  warn(msg: string)
  {
    this.config['panelClass'] = ['notification', 'warn', 'red-snackbar'];
    this.snackBar.open(msg, '', this.config);
  }

showSuccess(msg:string){
  this.toastr.success(msg,'', {
  timeOut: 1500,
});
 }

showError(msg: string)
{
  this.toastr.error(msg,'', {
    timeOut: 1200,
  });
}

showInfo(msg: string)
{
  this.toastr.info(msg,'', {
    timeOut: 1200,
  });
}

showWarning(msg: string)
{
  this.toastr.warning(msg,'', {
    timeOut: 1200,
  });
}

}




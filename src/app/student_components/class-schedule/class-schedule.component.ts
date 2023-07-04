import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {

  Time: string;
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  // Saturday: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { Time: "11am-12pm", Monday: "Biology", Tuesday: "Physics", Wednesday: 'Math', Thursday: 'Biology', Friday: 'History' },
  { Time: "12pm-1pm", Monday: "Physics", Tuesday: "Math", Wednesday: 'English', Thursday: 'Chemistry', Friday: 'Physics' },
  { Time: "1pm-2pm", Monday: "Math", Tuesday: "Bengali", Wednesday: 'Hindi', Thursday: 'Bengali', Friday: 'Math' },
  { Time: "2pm-3pm", Monday: "Tiffin", Tuesday: "Tiffin", Wednesday: 'Tiffin', Thursday: 'Tiffin', Friday: 'Tiffin' },
  { Time: "3pm-4pm", Monday: "Bengali", Tuesday: "English", Wednesday: 'Chemistry', Thursday: 'Geography', Friday: 'English' },
  { Time: "4pm-5pm", Monday: "English", Tuesday: "Biology", Wednesday: 'Physics', Thursday: 'History', Friday: 'Hindi' },
];
@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.css'],
  // standalone: true,
  // imports: [MatTableModule],
})


export class ClassScheduleComponent {
  displayedColumns: string[] = ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  dataSource = ELEMENT_DATA;
}



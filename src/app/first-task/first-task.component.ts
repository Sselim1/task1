import { Component } from '@angular/core';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.scss'] 
})
export class FirstTaskComponent {
  userName: string = "";
  currentView: string = 'firstTask';
  displayDetails: boolean = false;
  timeOfClicks: string[] = [];
  style = { background: 'blue' }; 

  switchView(view: string) {
    this.currentView = view;
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    const currentDate = new Date();
    const readableTimestamp = this.displayDetails 
      ? `Display Details At ${currentDate.toLocaleString()}` 
      : `Hide Details At ${currentDate.toLocaleString()}`;
    this.timeOfClicks.push(readableTimestamp);
  }
}

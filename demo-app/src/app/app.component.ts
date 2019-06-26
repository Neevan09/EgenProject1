import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: '<div *ngIf="appStatus">Welcome {{title}}</div>'
})
export class AppComponent {
  title = 'JustForCotton';
  appStatus:boolean = true;
  age = '2';
  handler() {
    alert('Hi this is Naveen');
  }
}

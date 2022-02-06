import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];
  constructor(){
    this.quotes=['hard work pays', 'Buy one get one free', 'When the going gets tough, the tough get going']
  }
  title = 'quote-generator';
}

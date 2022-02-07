 import { Quote } from '@angular/compiler/public_api';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
   newQuote =new Quote(0, "", "", "", newDate());
   @Output() addQuote = new EventEmitter<Quote>();

   submitQuote(){
     this.addQuote.emit(this.newQuote);
   }

  constructor() { }

  ngOnInit(){
  }

}
function newDate(): any {
  throw new Error('Function not implemented.');
}


import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,'Eli-k', 'George', 'life sayings','hard work pays', new Date(2000, 10, 10)),
    new Quotes(2,'Patrick', 'Sarah', 'Business sayings','Buy one get one free', new Date(2020, 1, 1)),
    new Quotes(3,'Paick', 'Sarh', 'Street-tech sayings','When the going gets tough, the tough get going', new Date(2011, 11, 11)),
    new Quotes(4,'Aick', 'Sharh', 'Tech sayings','Do not tamper with the code as long it works', new Date(2012, 10, 10))
  ];

  toggleDetails(index){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }
   completeQuote(isComplete, index){
     if (isComplete){
       this.quotes.splice(index, 1);
     }
   }
  constructor() { }

  ngOnInit() {
  }

  
  
  addNewQuote(quote){
    let quoteLength= this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
     
  }
  

}

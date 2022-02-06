import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('Eli-k', 'George', 'life sayings','hard work pays', new Date(2000, 10, 10)),
    new Quotes('patrick', 'Sarah', 'Business sayings','Buy one get one free', new Date(2020, 1, 1)),
    new Quotes('paick', 'Sarh', 'Street-tech sayings','When the going gets tough, the tough get going', new Date(2011, 11, 11)),
    new Quotes('aick', 'Sharh', 'Tech sayings','Do not tamper with the code as long it works', new Date(2012, 10, 10))
  ]
   
  constructor() { }

  ngOnInit(): void {
  }
  toggleDetails(index){
    this.quotes[index].showInfo=!this.quotes[index].showInfo
  }
  

}

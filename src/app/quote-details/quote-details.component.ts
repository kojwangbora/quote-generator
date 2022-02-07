import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isComplete =new EventEmitter<boolean>();
   
  vote = 0;
  down = 0;

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
 

  constructor() { }

  ngOnInit(){
  }
  addUps(){
    this.vote= this.vote+ 1
  }
  addDowns(){
    this.down = this.down+ 1
  }
  
   
   

}

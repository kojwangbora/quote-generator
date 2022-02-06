export class Quotes {
  showDescription: boolean;
 constructor(public author:string, public name:string,public title:string, public quote:string,public datePosted:Date){
    this.showDescription=false;
 }
    
}

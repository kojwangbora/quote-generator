export class Quotes {
  showDescription: boolean;
 constructor( public id: number, public author:string, public name:string, public title:string, public description:string,public datePosted:Date){
    this.showDescription=false;
 }
    
}

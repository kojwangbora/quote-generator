export class Quotes {

    public author:string
    public name: string
    public title:string
    public quote: string
    showInfo:boolean
 constructor(author:string, name:string,title:string, quote:string,public datePosted:Date){
    this.author=author
    this.name=name
    this.title= title
    this.quote=quote;
    this.showInfo=true
 }
     
  
    


     
}

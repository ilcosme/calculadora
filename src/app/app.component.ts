import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Micro Calculator';
  numberOne:number=0;
  numberTwo:number=0;
  result:number=0;

sumar():void{
    this.result=this.numberOne+this.numberTwo;
}
restar():void{
  this.result=this.numberOne-this.numberTwo;
}
dividir():void{
  this.result=this.numberOne / this.numberTwo;
}
multiplicar():void{
  this.result=this.numberOne * this.numberTwo;
}

}

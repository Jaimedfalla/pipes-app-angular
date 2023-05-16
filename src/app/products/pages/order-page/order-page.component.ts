import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html'
})
export class OrderPageComponent {

  public isUpperCase:boolean=false;
  public heroes:Hero[]=[
    {
      name:'Superman',
      canFly:true,
      color:Color.red
    },
    {
      canFly:false,
      color:Color.black,
      name:'Batman'
    },
    {
      canFly:false,
      color:Color.red,
      name:'Daredevil'
    },
    {
      canFly:false,
      color: Color.green,
      name:'Robin'
    },
    {
      canFly:true,
      color:Color.green,
      name:'Green Lantern'
    }
  ];

  public orderBy:keyof Hero='canFly';

  toggleUpperCase():void
  {
    this.isUpperCase = !this.isUpperCase;
  }
}

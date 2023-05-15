import { Component } from '@angular/core';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  public name:string='Antiquity';
  public gender:'male'|'female' ='male';
  public invitationMap={
    'male':'invitarlo',
    'female':'invitarla'
  };

  changeClient():void
  {
    this.name ='Paparazzi';
    this.gender ='female';
  }

  //i18nPlural
  public clients:string[]=['María','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];

  dispatchClient():void{
    this.clients.pop();
  }
}

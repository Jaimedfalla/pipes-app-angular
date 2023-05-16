import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

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
  public clientsMap = {
    '=1':'1 client in row',
    'other':'# clients in row'
  };

  dispatchClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name:'Idealness',
    age:38,
    address:'Bogotá Colombia'
  };

  //Async Pipe
  public myObservableTimer = interval(2000).
    pipe(
      tap(value => console.log('tap:',value))
    );

}

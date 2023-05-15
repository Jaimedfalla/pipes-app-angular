import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower:string='harmonics';
  public nameUpper:string='HARMONICS';
  public fullName:string='haRmOnIcS LinGuISt';
}

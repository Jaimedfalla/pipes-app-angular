import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[]=[];

  ngOnInit(): void {
    this.menuItems = [
      {
        label:'Angular Pipes',
        icon:'pi pi-desktop',
        items:[
          {
            label:'Text and Dates',
            icon:'pi pi-align-left',
            routerLink:['']
          },
          {
            label:'Numbers',
            icon:'pi pi-dollar',
            routerLink:['/numbers']
          },
          {
            label:'Not Common',
            icon:'pi pi-globe',
            routerLink:['/uncommon']
          }
        ]
      },
      {
        label:'Custom Pipes',
        icon:'pi pi-cog'
      },
    ];
  }

}
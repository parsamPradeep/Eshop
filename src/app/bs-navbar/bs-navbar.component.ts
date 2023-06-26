import { Observable,of } from 'rxjs';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import {NavItem } from '../models/nav-Item';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {
  appUser: AppUser | null;
  panelOpenState: boolean=false;
  menu: NavItem [] = [
    {
      displayName: 'Expedientes',       
      children: [
        {
          displayName: 'Mis Expedientes',
          route: '/misexpedientes'
        },
        { 
          displayName: 'Todos',
          route: '/todos'
        }
      ]
    },
  ];
  constructor(private auth: AuthService){
    this.appUser=null;
    auth.appUser$.subscribe(appUser=>this.appUser=appUser);
  }
  
  logOut(){
     this.auth.logOut()
  }
}

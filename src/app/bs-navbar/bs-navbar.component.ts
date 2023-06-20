import { Observable,of } from 'rxjs';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {
  appUser: AppUser | null;
  constructor(private auth: AuthService){
    this.appUser=null;
    auth.appUser$.subscribe(appUser=>this.appUser=appUser);
  }
  
  logOut(){
     this.auth.logOut()
  }
}

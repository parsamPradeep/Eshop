import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {map }from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    return this.auth.user$.pipe(map(user =>{
      if(user) return true;

      this.router.navigate(['/login'],{ queryParams: {returnUrl: state.url}});
      console.log('At Auth gurd',state.url);
      return false;
    }))
  }
}

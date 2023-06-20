import { UserService } from './users.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {Observable, map, switchMap }from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate():  Observable<boolean>{
    return this.auth.appUser$.pipe(
      map((user) => !!user?.isAdmin)
    ) 
  }
}

import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router, private usersSerice: UserService){
    auth.user$.subscribe(user => {
      if(user){
      usersSerice.save(user);
      let returnUrl:any = localStorage.getItem('returnUrl');
      router.navigateByUrl(returnUrl);
      console.log('At appcmp', returnUrl);
      }
    })
  }
}

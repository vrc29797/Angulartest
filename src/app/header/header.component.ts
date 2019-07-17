import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appTitle: string = 'Portal';
  userName : string = '' ;
  IsLogged : boolean = false;



  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn())
    {
      this.IsLogged=true;
      this.userName=this.authService.getUserName();
    }
  }

  logout(){
    this.IsLogged=false;
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { 
    let user = this.loginService.getUser()
    if(!user){
      this.router.navigate(['/'])
    }
  }



}

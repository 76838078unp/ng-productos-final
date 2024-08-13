import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  show: boolean = false;
  count: number = 0;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { 
    let user = this.loginService.getUser()
    if(!user){
      this.router.navigate(['/'])
    }

    this.loginService.spinnerEvent.subscribe(
      (show:boolean)=>{
        this.count = show ? this.count+1 : this.count-1;
        this.show = (this.count>0);
      }
    )
  }



}

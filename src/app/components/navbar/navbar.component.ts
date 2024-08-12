import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/layouts/BaseComponent';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends BaseComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    super()
   }

  salir(){
    this.questionAlert('¿Está seguro que desea salir?').then(
      (result) => {
        if(result.isConfirmed){
          this.loginService.logout()
          this.router.navigate(['/'])
        }
      }
    )
    
  }

}

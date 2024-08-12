import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/layouts/BaseComponent';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { 
    super()
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    if(this.loginForm.invalid){
      this.showAlertError("Complete todos los campos")
      return;
    }
    let isLoggin = this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    )
    if(!isLoggin){
      this.showAlertError('Usuario o contraseña incorrecta')
      return
    }
    this.router.navigate(['/admin'])
  }

}

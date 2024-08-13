import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public spinnerEvent: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  showSpinner(){
    this.spinnerEvent.emit(true)
  }
  hideSpinner(){
    this.spinnerEvent.emit(false)
  }

  login(user: string, password: string){
    if(user == 'admin' && password == '123456'){
      localStorage.setItem('user', user)
      return true
    }
    return false
  }

  getUser(){
    return localStorage.getItem('user')
  }

  logout(){
    localStorage.removeItem('user')
  }
}

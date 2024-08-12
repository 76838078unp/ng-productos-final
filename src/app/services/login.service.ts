import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

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

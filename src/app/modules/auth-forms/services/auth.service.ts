import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _http: HttpClient ) { }

  login = () => {
    console.log('Hacer proceso de login')
  }
  register = () => {
    console.log('Hacer proceso de register')
  }
  logout = () => {
    console.log('Hacer proceso de logout')
  }
}


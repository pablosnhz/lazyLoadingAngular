import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  loginForm: FormGroup | undefined;

  constructor( private _formBuilder: FormBuilder, private _authServ: AuthService ){}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: '',
      email: '',
    })
  }

  submitForm = () => {
    this._authServ.login();
  }

}

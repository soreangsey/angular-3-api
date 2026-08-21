import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router }
  from '@angular/router';

import { AuthService }
  from '../../core/services/auth/auth-service';


@Component({
  selector: 'app-login',

  imports: [
    ReactiveFormsModule
  ],

  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  errorMessage = '';


  loginForm = new FormGroup({

    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email
      ]
    ),

    password: new FormControl(
      '',
      Validators.required
    )

  });


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  login(): void {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      this.errorMessage =
        'Please complete the form correctly.';

      return;

    }


    const email =
      this.loginForm.value.email ?? '';

    const password =
      this.loginForm.value.password ?? '';


    const success =
      this.authService.login(
        email,
        password
      );


    if (success) {

      this.errorMessage = '';

      this.router.navigate(['/']);

    }
    else {

      this.errorMessage =
        'Incorrect email or password.';

    }

  }

}
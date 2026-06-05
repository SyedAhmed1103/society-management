import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take, timeout } from 'rxjs';
import { User } from '../../../core/services/user';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  emailOrPhone = '';
  password = '';
  showPassword = false;
  isLoggingIn = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private userService: User
  ) {}

  login() {

    this.errorMessage = '';

    this.userService
    .getUser(this.emailOrPhone)
    .subscribe({

      next: (user) => {

        if (user.password === this.password) {

          localStorage.setItem(
            'token',
            'loggedIn'
          );

          this.router.navigate(
            ['/user']
          );

        } else {

          this.errorMessage =
            'Wrong password';

        }

      },

      error: () => {

        this.errorMessage =
          'User not found';

      }

    });

  }
}

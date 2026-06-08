import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { loginservice } from '../../../core/services/login';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  imports: [
 FormsModule,
MatToolbarModule,
MatFormFieldModule,
MatInputModule,
MatButtonModule,
MatIconModule,
MatCardModule,

  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


    username = '';
  password = '';
    hidePassword = true;   // <-- Ye missing hai

    constructor(private loginService: loginservice) {}


     login() {
    this.loginService
      .login(this.username, this.password)
      .subscribe({
        next: (res) => {
          console.log('Success', res);
        },
        error: (err) => {
          console.log('Error', err);
        }
      });
  }

  
}

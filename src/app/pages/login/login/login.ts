import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    constructor(private router: Router) {}

  showPassword = false;



login(): void {
  console.log('Login Clicked');
  this.router.navigate(['']);
}
}

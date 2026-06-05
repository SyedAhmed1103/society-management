import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../core/services/user';

@Component({
  selector: 'app-useradd',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './useradd.html',
  styleUrl: './useradd.css',
})
export class Useradd {
  @Output() created = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  firstName = '';
  lastName = '';
  email = '';
  username = '';
  phone = '';
  password = '';
  isSaving = false;
  errorMessage = '';

  constructor(private userService: User) {}

  createUser() {
    this.errorMessage = '';
    this.isSaving = true;

    this.userService.createUser({
      id: 0,
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      phone: this.phone,
      userStatus: 0,
    }).subscribe({
      next: () => {
        this.isSaving = false;
        this.created.emit();
      },
      error: () => {
        this.isSaving = false;
        this.errorMessage = 'Unable to create user. Please try again.';
      },
    });
  }

  cancel() {
    this.cancelled.emit();
  }
}

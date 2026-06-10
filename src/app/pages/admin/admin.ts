import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminService } from '../../core/services/adminService';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin implements OnInit {
  isEditing = false;
  showPassword = false;
  AdminId: any;
  admin: any = {};


  constructor(
    private adminService: AdminService
  ) {}




ngOnInit(): void {

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  console.log('Loaded Admin:', user);

  this.AdminId = user.id;

  this.loadAdmin();

}
loadAdmin() {
  this.adminService.getAdminById(this.AdminId).subscribe({
    next: (response) => {
      this.admin = response.data;
    },
    error: (error) => {
      console.error(error);
    }
  });
}
 editProfile() {

  // First click → enable editing
  if (!this.isEditing) {
    this.isEditing = true;
    return;
  }

  // Second click → save changes
  const payload = {
    building: this.admin.building,
    password: this.admin.password,
    name: this.admin.name,
    email: this.admin.email,
    mobile: this.admin.mobile
  };

  this.adminService.updateAdmin(this.AdminId, payload)
    .subscribe({
      next: (response) => {

        console.log(response);

        alert('Profile updated successfully');

        this.isEditing = false;

        // Fetch latest data again
        this.loadAdmin();
      },

      error: (error) => {
        console.error(error);
        alert('Failed to update profile');
      }
    });
}

}
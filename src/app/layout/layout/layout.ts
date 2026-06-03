import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  showMenu = false;
  sidebarOpen = true;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    alert('Logout clicked');
  }
}
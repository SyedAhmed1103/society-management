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

  buildingName = '';
  AdminName: any;

  ngOnInit() {

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    this.buildingName = user.building_name || 'Society Maintenance App';
    this.AdminName = user.name ;


  }

  showMenu = false;
  sidebarOpen = true;
  settingsOpen = false;

toggleSettings() {
  this.settingsOpen = !this.settingsOpen;
}

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
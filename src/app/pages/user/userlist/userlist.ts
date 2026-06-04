import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Useradd } from '../useradd/useradd';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule, FormsModule, Useradd],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist {

  private readonly addPanelAnimationMs = 1300;

  firstName = '';
  flatNumber = '';
  phoneNumber = '';
  showAddPanel = false;
  isAddPanelClosing = false;
  private addPanelCloseTimer?: ReturnType<typeof setTimeout>;

  openAddPanel() {
    if (this.addPanelCloseTimer) {
      clearTimeout(this.addPanelCloseTimer);
    }

    this.showAddPanel = true;
    this.isAddPanelClosing = false;
  }

  closeAddPanel() {
    if (this.isAddPanelClosing) {
      return;
    }

    this.isAddPanelClosing = true;

    this.addPanelCloseTimer = setTimeout(() => {
      this.showAddPanel = false;
      this.isAddPanelClosing = false;
      this.addPanelCloseTimer = undefined;
    }, this.addPanelAnimationMs);
  }

  searchUsers() {
    console.log('First Name:', this.firstName);
    console.log('Flat Number:', this.flatNumber);
    console.log('Phone Number:', this.phoneNumber);

    // API call ya filter logic yaha ayega
  }

  resetForm() {
    this.firstName = '';
    this.flatNumber = '';
    this.phoneNumber = '';
  }

  allowPhoneOnly(event: any) {
    let value = event.target.value;

    // Sirf numbers aur + allow
    value = value.replace(/[^0-9+]/g, '');

    // + sirf first position pe allow
    if (value.indexOf('+') > 0) {
      value = value.replace(/\+/g, '');
    }

    event.target.value = value;
    this.phoneNumber = value;
  }
}

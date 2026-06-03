import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  imports: [RouterLink, FormsModule],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist {

  firstName = '';
  flatNumber = '';
  phoneNumber = '';

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
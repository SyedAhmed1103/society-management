import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Useradd } from '../useradd/useradd';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
      Useradd
  ],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css'
})
export class Userlist {

  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'flat'
  ];

  private readonly addPanelAnimationMs = 1300;

  firstName = '';
  flatNumber = '';
  phoneNumber = '';

  showAddPanel = false;
  isAddPanelClosing = false;
  private addPanelCloseTimer?: ReturnType<typeof setTimeout>;

  dataSource = new MatTableDataSource([
    {
      name: 'Ahmed',
      email: 'ahmed@gmail.com',
      phone: '9876543210',
      flat: 'A-101'
    },
    {
      name: 'Zainub',
      email: 'zainub@gmail.com',
      phone: '9876543211',
      flat: 'B-202'
    }
  ]);

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

  allowPhoneOnly(event: any) {
    const value = event.target.value.replace(/\D/g, '');
    event.target.value = value;
    this.phoneNumber = value;
  }

  searchUsers() {
    console.log('Search Clicked');

    const filteredData = this.dataSource.data.filter(user =>
      (!this.firstName ||
        user.name.toLowerCase().includes(this.firstName.toLowerCase())) &&
      (!this.flatNumber ||
        user.flat.toLowerCase().includes(this.flatNumber.toLowerCase())) &&
      (!this.phoneNumber ||
        user.phone.includes(this.phoneNumber))
    );

    this.dataSource.data = filteredData;
  }

  resetForm() {
    this.firstName = '';
    this.flatNumber = '';
    this.phoneNumber = '';

    this.dataSource.data = [
      {
        name: 'Ahmed',
        email: 'ahmed@gmail.com',
        phone: '9876543210',
        flat: 'A-101'
      },
      {
        name: 'Zainub',
        email: 'zainub@gmail.com',
        phone: '9876543211',
        flat: 'B-202'
      }
    ];
  }
}
import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-userlist',
  imports: [FormsModule, MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule],
=======
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Useradd } from '../useradd/useradd';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule, FormsModule, Useradd],
>>>>>>> 9c92b9deb80028ac44666f25bfc86f78d712ff4c
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist {

<<<<<<< HEAD
  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'flat'
  ];
=======
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
>>>>>>> 9c92b9deb80028ac44666f25bfc86f78d712ff4c

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
<<<<<<< HEAD
  ]);
}
=======

    event.target.value = value;
    this.phoneNumber = value;
  }
}
>>>>>>> 9c92b9deb80028ac44666f25bfc86f78d712ff4c

import { Component } from '@angular/core';
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
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist {

  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'flat'
  ];

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
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BuildingService } from '../../../../core/services/buildingService';


@Component({
  selector: 'app-building-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './building-settings.html',
  styleUrl: './building-settings.css'
})
export class BuildingSettings implements OnInit {
  buildingCode: any;

  constructor(
    private buildingService: BuildingService
  ) { }

  profileImage = '';

  buildingName = '';
  address = '';
  city = '';
  state = '';
  pincode = '';
  societyEmail = '';
  societyMobile = '';
  buildingType = '';

  buildingId = 0;

  ngOnInit() {

    const user = JSON.parse(
      localStorage.getItem('user') || '{}'
    );

    this.buildingId = user.building;

    if (!this.buildingId) {
      alert('Building ID not found');
      return;
    }

    this.loadBuilding(this.buildingId);
  }

  loadBuilding(id: number) {

    // console.log('Building Id =>', id);

this.buildingService
  .getBuildingById(id)
  .subscribe({

    next: (response: any) => {

      // console.log('GET Building Response =>', response);

      const data = response.data;

      this.buildingName = data?.building_name || '';
      this.address = data?.address || '';
      this.city = data?.city || '';
      this.state = data?.state || '';
      this.pincode = data?.pincode || '';
      this.societyEmail = data?.society_email || '';
      this.societyMobile = data?.society_mobile || '';
      this.buildingType = data?.building_type || '';
      this.buildingCode = data?.building_code || '';

      // console.log('FORM DATA LOADED =>', data);

      localStorage.setItem(
        'buildingSettings',
        JSON.stringify({
          buildingName: this.buildingName,
          societyMobile: this.societyMobile
        })
      );

    },

    error: (err: any) => {

      console.error('GET ERROR =>', err);

      alert('Failed to load building details');
    }

  });

  }

  onImageSelect(event: any) {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      this.profileImage = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  saveSettings() {

    const payload = {

      building_name: this.buildingName,
      address: this.address,
      city: this.city,
      state: this.state,
      pincode: this.pincode,
      society_email: this.societyEmail,
      society_mobile: this.societyMobile,
      building_type: this.buildingType,
      building_code: this.buildingCode,
      

    };

    this.buildingService
      .updateBuilding(this.buildingId, payload)
      .subscribe({

        next: () => {

          // Sirf 2 values localStorage me
          localStorage.setItem(
            'buildingSettings',
            JSON.stringify({
              buildingName: this.buildingName,
              societyMobile: this.societyMobile
            })
          );

          alert('Building Updated Successfully');
        },

      error: (err: any) => {

  // console.log('FULL ERROR =>', err);
  // console.log('ERROR BODY =>', err.error);
  // console.log('VALIDATION ERRORS =>', err.error?.errors);

  alert(JSON.stringify(err.error?.errors));

}

      });

  }

}
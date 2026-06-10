import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WingService } from '../../../core/services/wingService';

@Component({
  selector: 'app-wings',
  imports: [CommonModule, FormsModule],
  templateUrl: './wings.html',
  styleUrl: './wings.css',
})
export class Wings {
  buildingId:any;
wingList: any[] = [];
 showForm = false;

constructor(private wingService: WingService) {}


    ngOnInit() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
       this.buildingId = user.building ;
console.log(this.buildingId);
this.loadWings();
}

loadWings() {
  this.wingService.getWings().subscribe({
    next: (res) => {

      // Agar API array return kar rahi hai
   this.wingList = res.data.filter(
  (wing: any) => wing.building === this.buildingId
);

console.log(this.wingList);

    
    },
    error: (err) => {
      console.error(err);
    }
  });
}




  wings: any[] = [];

wingData = {
  building: 0,
  wing_name: '',
  is_active: true
};

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  editId: number | null = null;

startEdit(wing: any) {
  this.editId = wing.id;
}

cancelEdit() {
  this.editId = null;
}

updateWing(wing: any) {

  const payload = {
    building: this.buildingId,
    wing_name: wing.wing_name,
    is_active: wing.is_active
  };

  this.wingService.updateWing(wing.id, payload)
    .subscribe({

      next: (res) => {

        console.log('Updated', res);

        this.editId = null;

      },

      error: (err) => {

        console.log(err);

      }

    });

}

saveWing() {

  this.wingData.building = this.buildingId;

  this.wingService.createWing(this.wingData).subscribe({
    next: (res) => {
      console.log('Wing Created', res);

      alert('Wing Added Successfully');

      this.loadWings(); // refresh list

      this.wingData = {
        building: this.buildingId,
        wing_name: '',
        is_active: true
      };
    },
    error: (err) => {
      console.error(err);
      alert('Error Creating Wing');
    }
  });
}

}
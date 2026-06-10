import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { LoginService } from '../../../core/services/LoginService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

 phone: string = '';
password: string = '';
building: number | null = null;


  showPassword = false;

  buildingName = '';

  buildings: any[] = [];
  filteredBuildings: any[] = [];
  selectedBuilding: any = null;

  constructor(
    private loginService: LoginService,
      private router: Router
  ) {}

  ngOnInit(): void {

    this.loginService.getBuildings().subscribe({
      next: (res) => {

        console.log('Buildings API Response:', res);

        this.buildings = res.data;

      },
      error: (err) => {

        console.error('Building API Error:', err);

      }
    });

  }

  onBuildingSearch() {
  const search = this.buildingName.toLowerCase();

  this.filteredBuildings = this.buildings.filter(
    building =>
      building.building_name.toLowerCase().includes(search)
  );
}

selectBuilding(building: any) {

  this.selectedBuilding = building;

  this.buildingName = building.building_name;

  this.filteredBuildings = [];
}

Login() {

  const payload = {
    building: this.selectedBuilding?.id,
    mobile: this.phone,
    password: this.password
  };

  console.log('Payload:', payload);

  this.loginService.login(payload).subscribe({
    next: (res) => {

      console.log('Success:', res);
            if (res.success) {

               console.log('Navigating to user page...');
        // User data save kar l
        localStorage.setItem('user', JSON.stringify(res.data));

        // User page open karo
        this.router.navigate(['/']);

      }

    },
    error: (err) => {

      console.log('Error:', err);

    }
  });

}

  

}
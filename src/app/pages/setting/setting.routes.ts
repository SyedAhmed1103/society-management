import { Routes } from '@angular/router';
import { Wings } from './wings/wings';
import { BuildingSettings } from './Building/building-settings/building-settings';




export const settingRoutes: Routes = [


    {
    path: 'building',
    component: BuildingSettings
  },
     {
    path: 'wing',
    component: Wings
  },
    
];
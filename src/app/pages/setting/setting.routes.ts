import { Routes } from '@angular/router';
import { Flat } from './flat/flat';
import { Flatadd } from './flatadd/flatadd';
import { Flatedit } from './flatedit/flatedit';



export const settingRoutes: Routes = [
  {
    path: '',
    component: Flat
  },
  {
    path: 'add',
    component: Flatadd
  },
  {
    path: 'edit/:id',
    component: Flatedit
  }
];
import { Routes } from '@angular/router';

import { Userlist } from './userlist/userlist';
import { Useradd } from './useradd/useradd';
import { Useredit } from './useredit/useredit';

export const userRoutes: Routes = [
  {
    path: '',
    component: Userlist
  },
  {
    path: 'add',
    component: Useradd
  },
  {
    path: 'edit/:id',
    component: Useredit
  }
];
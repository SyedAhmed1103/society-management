import { Routes } from '@angular/router';

import { Complaintslist } from './complaintslist/complaintslist';
import { Complaintsadd } from './complaintsadd/complaintsadd';
import { Complaintsedit } from './complaintsedit/complaintsedit';

export const COMPLAINTS_ROUTES: Routes = [

  {
    path: '',
    component: Complaintslist
  },

  {
    path: 'add',
    component: Complaintsadd
  },

  {
    path: 'edit/:id',
    component: Complaintsedit
  }

];
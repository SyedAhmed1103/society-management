import { Routes } from '@angular/router';

import { Login } from './pages/login/login/login';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [

  // Login
  {
    path: 'login',
    component: Login
  },

  {
    path: 'user',
    component: Layout
  },
  // Main Layout
  {
    path: '',
    // component: user,
    children: [

      // Default Page
      // {
      //   path: 'user',
      //   redirectTo: 'user',
      //   pathMatch: 'full'
      // },



    ]

  }

  //     // Future Pages
  //     // {
  //     //   path: 'dashboard',
  //     //   component: DashboardComponent
  //     // },

  //     // {
  //     //   path: 'maintenance',
  //     //   component: MaintenanceComponent
  //     // }

  //   ]
  // },

  // Invalid Route
  // {
  //   path: '**',
  //   redirectTo: 'login'
  // }

];
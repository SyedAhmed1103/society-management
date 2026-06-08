import { Routes } from '@angular/router';

import { Login } from './pages/login/login/login';
import { Layout } from './layout/layout/layout';
import { Userlist } from './pages/user/userlist/userlist';
import { Maintenance } from './pages/maintenance/maintenance';

export const routes: Routes = [

  // Login
  {
    path: 'login',
    component: Login
  },

  // Main Layout
  // {
  //   path: '',
  //   component: Layout,
  //   children: [

  //     // Default Page
  //     {
  //       path: '',
  //       redirectTo: 'user',
  //       pathMatch: 'full'
  //     },

  //     // User Page
  //     {
  //       path: 'user',
  //       loadChildren: () =>
  //         import('./pages/user/user.routes')
  //           .then(m => m.userRoutes)
  //     },
  //       {
  //       path: 'setting',
  //       loadChildren: () =>
  //         import('./pages/setting/setting.routes')
  //           .then(m => m.settingRoutes)
  //     },
  //     {
  //       path: 'maintenance',
  //       component: Maintenance
  //     },

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
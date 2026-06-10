import { Routes } from '@angular/router';

import { Login } from './pages/login/login/login';
import { Layout } from './layout/layout/layout';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [

  // Login
  {
    path: 'login',
    component: Login
  },

 {
    path: '',
    component: Layout,
    children: [

      {
        path: 'setting',
        loadChildren: () =>
          import('./pages/setting/setting.routes')
            .then(m => m.settingRoutes)
      },
      {
         path: 'profile',
         component: Admin,
      }

    ]
  }











 

];
import { Routes } from '@angular/router';
import { Login } from './features/login/login/login';


export const routes: Routes = [
{
    path: 'users',
    loadChildren: () =>
      import('./features/user/user.routes')
        .then(m => m.userRoutes)
  },
 {
    path: '',
    component: Login
  },
  // invalid URL handle karne ke liye
  {
    path: '**',
    redirectTo: ''
  }
];
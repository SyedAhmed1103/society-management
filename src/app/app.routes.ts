import { Routes } from '@angular/router';


export const routes: Routes = [
{
    path: 'users',
    loadChildren: () =>
      import('./features/user/user.routes')
        .then(m => m.userRoutes)
  }
,
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];
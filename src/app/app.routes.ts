import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Management } from './pages/management/management';
import { Income } from './pages/income/income';
import { Expenses } from './pages/expenses/expenses';
import { Notices } from './pages/notices/notices';
import { Complaints } from './pages/complaints/complaints';
import { Users } from './pages/users/users';
import { Settings } from './pages/settings/settings';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: Dashboard },
  { path: 'management', component: Management },
  { path: 'income', component: Income },
  { path: 'expenses', component: Expenses },
  { path: 'notice', component: Notices},
  { path: 'complaints', component: Complaints },
  { path: 'user', component: Users },
  { path: 'setting', component: Settings }
];
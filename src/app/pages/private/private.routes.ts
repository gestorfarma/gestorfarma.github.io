import { Routes } from '@angular/router';
import { DashboardPage } from './dashboard-page/dashboard-page';
import { FirstPasswordChangePage } from './first-password-change-page/first-password-change-page';

export const privateRoutes: Routes = [
  { path: 'first-password-change', component: FirstPasswordChangePage },
  { path: 'dashboard', component: DashboardPage },
];

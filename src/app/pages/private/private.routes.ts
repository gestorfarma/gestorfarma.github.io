import { forcePasswordChangeGuard, noNeedToforcePasswordChangeGuard } from '@/guards/auth-guard';
import { Routes } from '@angular/router';
import { DashboardPage } from './dashboard-page/dashboard-page';
import { FirstPasswordChangePage } from './first-password-change-page/first-password-change-page';

export const privateRoutes: Routes = [
  {
    path: 'force-password-change',
    canActivate: [forcePasswordChangeGuard],
    component: FirstPasswordChangePage,
  },
  {
    path: '',
    canActivateChild: [noNeedToforcePasswordChangeGuard],
    children: [{ path: 'dashboard', component: DashboardPage }],
  },
];

import { authenticatedGuard, nonAuthenticatedGuard } from '@/guards/auth-guard';
import { Routes } from '@angular/router';
import { LogoutPage } from './pages/logout-page/logout-page';

export const routes: Routes = [
  {
    path: '',
    canActivate: [nonAuthenticatedGuard],
    loadChildren: () => import('./pages/public/public.routes').then((r) => r.publicRoutes),
  },
  {
    path: '',
    canActivate: [authenticatedGuard],
    loadChildren: () => import('./pages/private/private.routes').then((r) => r.privateRoutes),
  },
  { path: 'logout', component: LogoutPage },
];

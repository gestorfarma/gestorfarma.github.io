import { authenticatedGuard, nonAuthenticatedGuard } from '@/guards/auth-guard';
import { Routes } from '@angular/router';

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
];

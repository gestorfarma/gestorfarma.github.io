import { AuthService } from '@/services/auth/auth-service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const authenticated = !!authService.authData();
  if (authenticated) {
    return true;
  } else {
    return router.parseUrl('/');
  }
};

export const nonAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const authenticated = !!authService.authData();
  if (authenticated) {
    return router.parseUrl('/dashboard');
  } else {
    return true;
  }
};

export const forcePasswordChangeGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const forcePasswordChange = authService.authData()?.forcePasswordChange;
  if (forcePasswordChange) {
    return true;
  } else {
    return router.parseUrl('/force-password-change');
  }
};

export const noNeedToforcePasswordChangeGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const forcePasswordChange = authService.authData()?.forcePasswordChange;
  if (forcePasswordChange) {
    return router.parseUrl('/force-password-change');
  } else {
    return true;
  }
};

import { ComponentFixtureNoNgZone, TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nonAuthenticatedGuard } from './auth-guard';

describe('nonAuthenticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => nonAuthenticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ComponentFixtureNoNgZone, useValue: true }],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

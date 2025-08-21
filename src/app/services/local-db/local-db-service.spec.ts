import { TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { LocalDbService } from './local-db-service';

describe('LocalDbService', () => {
  let service: LocalDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(LocalDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

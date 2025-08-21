import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { FirstPasswordChangePage } from './first-password-change-page';

describe('FirstPasswordChangePage', () => {
  let component: FirstPasswordChangePage;
  let fixture: ComponentFixture<FirstPasswordChangePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPasswordChangePage],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstPasswordChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

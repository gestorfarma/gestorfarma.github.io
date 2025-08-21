import { Card } from '@/components/card/card';
import { NewPasswordForm } from '@/components/new-password-form/new-password-form';
import { AuthService } from '@/services/auth/auth-service';
import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-password-change-page',
  imports: [Card, MatIcon, NewPasswordForm],
  templateUrl: './first-password-change-page.html',
  styleUrl: './first-password-change-page.css',
})
export class FirstPasswordChangePage {
  private router = inject(Router);

  private authService = inject(AuthService);

  protected readonly subtitle = signal(
    'A combinação perfeita entre informações regionais do mercado de farma e indicadores poderosos de gestão!'
  );

  onFormSubmitted(event: any) {
    this.authService.setFirstPassword();
    this.router.navigate(['dashboard']);
  }
}

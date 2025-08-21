import { Card } from '@/components/card/card';
import { NewPasswordForm } from '@/components/new-password-form/new-password-form';
import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-first-password-change-page',
  imports: [Card, MatIcon, NewPasswordForm],
  templateUrl: './first-password-change-page.html',
  styleUrl: './first-password-change-page.css',
})
export class FirstPasswordChangePage {
  protected readonly subtitle = signal(
    'A combinação perfeita entre informações regionais do mercado de farma e indicadores poderosos de gestão!'
  );
}

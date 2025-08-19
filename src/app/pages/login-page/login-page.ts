import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { LoginForm } from '../../components/login-form/login-form';

@Component({
  selector: 'app-login-page',
  imports: [Card, LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  protected readonly subtitle = signal('A combinação perfeita entre informações regionais do mercado de farma e indicadores poderosos de gestão!');
}

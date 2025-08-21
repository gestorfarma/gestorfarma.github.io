import { Card } from '@/components/card/card';
import { LoginForm } from '@/components/login-form/login-form';
import { AuthService } from '@/services/auth/auth-service';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [Card, LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  private router = inject(Router);

  private authService = inject(AuthService);

  authenticating = signal(false);

  protected readonly subtitle = signal(
    'A combinação perfeita entre informações regionais do mercado de farma e indicadores poderosos de gestão!'
  );

  goToFirstPasswordPage() {
    this.router.navigate(['first-password-change']);
  }

  async login({ username, password }: { username: string; password: string }) {
    this.authenticating.set(true);

    const [user, error] = await this.authService.login(username, password);

    this.authenticating.set(false);

    if (error) {
      return alert('Credenciais inválidas 3');
    } else {
      return this.goToFirstPasswordPage();
    }
  }
}

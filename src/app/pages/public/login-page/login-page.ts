import { Card } from '@/components/card/card';
import { LoginForm } from '@/components/login-form/login-form';
import { ALERT_TYPE, AlertService } from '@/services/alert/alert-service';
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
  authenticating = signal(false);

  private router = inject(Router);

  private authService = inject(AuthService);

  private alertService = inject(AlertService);

  protected readonly subtitle = signal(
    'A combinação perfeita entre informações regionais do mercado de farma e indicadores poderosos de gestão!'
  );

  async login({ username, password }: { username: string; password: string }) {
    this.authenticating.set(true);

    const [user, error] = await this.authService.login(username, password);

    this.authenticating.set(false);

    if (error) {
      this.alertLoginError('Credenciais inválidas', 'Fechar');
    } else {
      this.router.navigate(['dashboard']);
    }
  }

  private alertLoginError(message: string, action: string) {
    this.alertService.alert(message, action, {
      verticalPosition: 'top',
      duration: 7e3,
      type: ALERT_TYPE.ERROR,
    });
  }
}

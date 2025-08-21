import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthService } from './services/auth/auth-service';

const pathsWithoutHeader = ['/', '/login', '/password-reset', '/force-password-change'];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private router = inject(Router);

  authService = inject(AuthService);

  showHeader = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => {
        const path = event.urlAfterRedirects.split('?')[0];
        return !pathsWithoutHeader.includes(path);
      })
    )
  );
}

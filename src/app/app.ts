import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

const pathsWithoutHeader = ['/', '/login', '/password-reset', '/first-password-change'];

const DATA_COLLECTION = 'APP_DATA';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private router = inject(Router);

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

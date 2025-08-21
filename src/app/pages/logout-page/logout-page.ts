import { AuthService } from '@/services/auth/auth-service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-page',
  imports: [],
  templateUrl: './logout-page.html',
  styleUrl: './logout-page.css',
})
export class LogoutPage implements OnInit {
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.logout();
  }
}

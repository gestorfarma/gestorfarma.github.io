import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  protected readonly subtitle = signal('A combinação perfeita entre informações regionais do mercado de farma e indicadores poderosos de gestão!');
}

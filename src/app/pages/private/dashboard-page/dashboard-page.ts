import { AfterViewInit, Component, signal } from '@angular/core';
import { PlotlyComponent } from 'angular-plotly.js';
import { PlotlyDataLayoutConfig } from 'plotly.js-dist-min';

@Component({
  selector: 'app-dashboard-page',
  imports: [PlotlyComponent],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage implements AfterViewInit {
  public graph = signal<PlotlyDataLayoutConfig | undefined>(undefined);

  ngAfterViewInit(): void {
    this.graph.set({
      data: [
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
      ],
      layout: { width: 320, height: 240, title: { text: 'A Fancy Plot' } },
    });
  }
}

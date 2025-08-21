import { Component, Input } from '@angular/core';

@Component({
  selector: 'plotly-plot',
  template: '',
})
export class PlotlyComponent {
  @Input() data: any;
  @Input() layout: any;
}

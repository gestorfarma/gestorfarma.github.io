import { routes } from '@/app.routes';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withRouterConfig({ paramsInheritanceStrategy: 'always' })),
    importProvidersFrom(PlotlyModule.forRoot(PlotlyJS)),
  ],
};

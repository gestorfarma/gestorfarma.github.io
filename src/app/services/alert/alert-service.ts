import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export type AlertDirection = 'ltr' | 'rtl';

export type AlertHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';

export type AlertVerticalPosition = 'top' | 'bottom';

export enum ALERT_TYPE {
  DEFAULT = 'DEFAULT',
  ERROR = 'ERROR',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARN = 'WARN',
}

export type AlertConfig<D = any> = {
  duration?: number;
  direction?: AlertDirection;
  data?: D | null;
  horizontalPosition?: AlertHorizontalPosition;
  verticalPosition?: AlertVerticalPosition;
  type?: ALERT_TYPE;
};

const panelClassByType: { [kei in ALERT_TYPE]: string } = {
  DEFAULT: 'alert-default',
  ERROR: 'alert-error',
  INFO: 'alert-info',
  SUCCESS: 'alert-success',
  WARN: 'alert-warn',
};

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private snackBar = inject(MatSnackBar);

  alert(message: string, actionText: string, config: AlertConfig) {
    const type = config.type || ALERT_TYPE.DEFAULT;
    const panelClass = panelClassByType[type];
    this.snackBar.open(message, actionText, { ...config, panelClass });
  }
}

import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBar } from '@angular/material/progress-bar';

enum SECRET_LEVEL {
  'LOW' = 'LOW',
  'MEDIUM' = 'MEDIUM',
  'HIGH' = 'HIGH',
}

const secretLevelLabel: { [key in SECRET_LEVEL]: string } = {
  LOW: 'Baixo',
  MEDIUM: 'Médio',
  HIGH: 'Alto',
};

@Component({
  selector: 'app-new-password-form',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSuffix,
    MatIcon,
    MatProgressBar,
  ],
  templateUrl: './new-password-form.html',
  styleUrl: './new-password-form.css',
})
export class NewPasswordForm {
  showPassword = signal(false);

  passwordFormControl = new FormControl('', [Validators.required, Validators.email]);

  passwordConfirmationFormControl = new FormControl('', [Validators.required]);

  matcher = new ErrorStateMatcher();

  secretLevel = signal<SECRET_LEVEL>(SECRET_LEVEL.MEDIUM);

  SECRET_LEVEL = SECRET_LEVEL;

  secretLevelLabel = secretLevelLabel;

  @Output() submit = new EventEmitter();
}

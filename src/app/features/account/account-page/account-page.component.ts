import {ChangeDetectionStrategy, Component} from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

import {merge} from 'rxjs';
/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'account-page.component',
  templateUrl: 'account-page.component.html',
  styleUrls: ['account-page.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPageComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);

  // errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      // .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    // if (this.email.hasError('required')) {
    //   this.errorMessage.set('You must enter a value');
    // } else if (this.email.hasError('email')) {
    //   this.errorMessage.set('Not a valid email');
    // } else {
    //   this.errorMessage.set('');
    // }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    email: '',
    age: '',
    passowrd: '',
  };

  password: boolean = true;
  hide() {
    this.password = !this.password;
    return !this.password;
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('form submitted', this.user);
    }
  }
}

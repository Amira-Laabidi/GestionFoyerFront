import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  hideCurrentPassword: boolean = true; 
  hideNewPassword: boolean = true; 
  hideConfirmPassword: boolean = true; 

  constructor(private router: Router){}

  changePassword() {
    // Logic for changing the password
  }

  goToChangePassword(event:Event) {
    this.router.navigate(['home/account/password'])
  }
}

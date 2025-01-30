import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  hideCurrentPassword: boolean = true; 
  hideNewPassword: boolean = true; 
  hideConfirmPassword: boolean = true; 
  isDisabled:boolean = true;
  currentPassword?:string; 
  newPassword?:string;
  
  constructor(private router: Router){}

  changePassword() {
    // Logic for changing the password
  }

  goToEditProfile(event:Event) {
    this.router.navigate(['home/account'])
  }
}

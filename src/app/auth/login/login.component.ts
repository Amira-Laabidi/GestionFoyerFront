import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private authService : AuthServiceService,private snackBar: MatSnackBar ){}
  
  password :boolean =true; 
  loginForm!: FormGroup;
  loginFormSubmitted = false; // Used to track form submission status
  isLoginFailed = false; // Flag to check if login failed

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Validation rules
      password: ['', [Validators.required]], // Validation rules
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return; // Prevent submission if the form is invalid
    }

    const signinRequest = {
      email: this.loginForm.get('email')!.value,
      password: this.loginForm.get('password')!.value,
    };

    this.authService.login(signinRequest).subscribe(
      (response) => {
        console.log(response);

        // Show success message
        this.snackBar.open(
          'Thank you... You connected successfully!',
          'Success',
          {
            duration: 5000, // Duration of the snackbar
            verticalPosition: 'top', // Position of the snackbar
          }
        );

        // Redirect based on user role
        if (StorageService.isAdminLoggedIn()) {
          this.router.navigate(['/home/dashboard/admin']);// Admin dashboard
        } else {
          this.router.navigate(['/home/dashboard/student']);
          // Student dashboard
        }
      },
      (error) => {
        if (error.status === 406) {
          // User not active
          this.snackBar.open('User is not active', 'Close', {
            duration: 5000, // Adjust the duration as needed
          });
        } else {
          // Bad credentials
          this.snackBar.open('Bad Credentials', 'Close', {
            duration: 5000, // Adjust the duration as needed
          });
        }
      }
    );
  }

    


hide() {
     this.password=!this.password;
    return !this.password;
}

login() {
  // event.preventDefault();
  this.router.navigate(['/home/dashboard/admin']);
}

clickEvent($event: MouseEvent) {
throw new Error('Method not implemented.');
}
emailFormControl: any;

}

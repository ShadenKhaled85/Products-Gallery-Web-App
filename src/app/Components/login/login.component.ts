import { Component, inject } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  isLoading : boolean = false;

  errorMsg : string = '';

  successMsg: string = '';

  loginForm : FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })

  submitForm(){
    if(this.loginForm.valid){
      this.isLoading = true;
      console.log(this.loginForm);
      console.log(this.loginForm.value);
      this.authService.signIn(this.loginForm.value).subscribe({
        next:(res)=>{
          this.isLoading = false;
          this.errorMsg = '';
          console.log(res);
          this.successMsg = res.message
          this.authService.setLoginStatus(true);
          // Navigate to Home page
          setTimeout(() => {
            this.router.navigate(['/home'])
          }, 1000);
        },

        error:(err)=>{
          this.isLoading = false;
          // Display error
          this.errorMsg = err.error.message;
        }
      })
    }

    else{
      this.loginForm.markAllAsTouched()
    }
  }
}

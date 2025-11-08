import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Authentication } from '../../shared/services/authentication';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
})
export class Login {
  form!: any;

  constructor(public formBuilder: FormBuilder, private service: Authentication) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

    isSubmitted: boolean = false;

  hasDisplayableError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty))
  }


  onLogin(){
    this.isSubmitted = true;
    if (this.form.valid) {
      this.service.login(this.form.value).subscribe({
        next: (res: any) => {
          /*this.service.saveToken(res.token);*/
          /*this.router.navigateByUrl('/dashboard');*/
        },
        error: err => {
          if (err.status == 400)
            /*this.toastr.error('Incorrect email or password.', 'Login failed')*/
              console.log('Incorrect email or password.', 'Login failed');

          else
            console.log('error during login:\n', err);
        }
      })
    }

  
    console.log(this.form.value);

  }
}

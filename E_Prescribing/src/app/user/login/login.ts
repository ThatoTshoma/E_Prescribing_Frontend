import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Authentication } from '../../shared/services/authentication';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
})
export class Login implements OnInit {
  form!: any;

  constructor(public formBuilder: FormBuilder, private service: Authentication, private toastr: ToastrService, private router: Router,) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isSubmitted: boolean = false;

    ngOnInit(): void {
    if (this.service.isLoggedIn())
      this.router.navigateByUrl('/dashboard')
  }

  hasDisplayableError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty))
  }


  onLogin() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.service.login(this.form.value).subscribe({
        next: (res: any) => {
          this.service.saveToken(res.token);
          this.router.navigateByUrl('/dashboard');
        },
        error: err => {
          if (err.status == 401)
           this.toastr.error('Incorrect email or password.', 'Login failed')

          else
            console.log('error during login:\n', err);
        }
      })
    }




  }
}

import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export default class SignInComponent {
  signInForm!: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.signInForm.invalid) return;

    this.loading = true;
    this.error = null;
<<<<<<< HEAD
    const {email,password} = this.signInForm.value
    this.authService.signin(email,password).subscribe({
=======
    const{email, password} = this.signInForm.value
    this.authService.signin(email, password).subscribe({
>>>>>>> 5925825c85312314bcbb8315b8d5d2f779d2984e
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error?.message || 'Sign in failed';
        this.loading = false;
      }
    });
  }
}


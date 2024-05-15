import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf
  ],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  #fb: FormBuilder = inject(FormBuilder);
  #authService: AuthService = inject(AuthService);
  loginForm!: FormGroup;
  showError!: boolean;


  ngOnInit(): void {
    this.initForm();
  }

  initForm():void {
    this.loginForm = this.#fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login():void {
    if(this.loginForm?.valid){
      this.#authService.login(
        this.loginForm.value,
        () => {
          this.showError = false;
        },
        () => {
          this.showError = true;
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }


}

import { Component, WritableSignal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PhrmacyComponent } from './components/phrmacy/phrmacy.component';
import { PatientComponent } from './components/patient/patient.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from './auth/services/auth.service';
import { IUser } from './auth/models/user.model';
import { Role } from './auth/enums/user-role.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    PhrmacyComponent,
    PatientComponent,
    LoginComponent,
    DoctorComponent,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  #authService: AuthService = inject(AuthService);
  profile: WritableSignal<IUser | null> = this.#authService.user;
  patientRole: Role = Role.Patient;
  title = 'pharmacy';
  logout():void {
    this.#authService.logout();
  }
}

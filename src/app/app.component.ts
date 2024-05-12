import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhrmacyComponent } from './components/phrmacy/phrmacy.component';
import { PatientComponent } from './components/patient/patient.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorComponent } from './components/doctor/doctor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PhrmacyComponent,PatientComponent,LoginComponent,DoctorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pharmacy';
}

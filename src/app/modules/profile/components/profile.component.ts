import { Component, InputSignal, Signal, WritableSignal, computed, inject, input, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../../auth/services/auth.service';
import { IUser } from '../../../auth/models/user.model';
import { TitleCasePipe } from '@angular/common';
import { OrderCardComponent } from '../../order/components/order-card/order-card.component';
import { OrderService } from '../../../shared/services/order.service';
import { IOrder } from '../../../shared/models/order.model';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Role } from '../../../auth/enums/user-role.enum';
import { DOCTORS, PATIENTS } from '../../../auth/constants/users.constant';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatTabsModule,
    MatCardModule,
    TitleCasePipe,
    OrderCardComponent,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  authService: AuthService = inject(AuthService);
  orderService: OrderService = inject(OrderService);
  email: InputSignal<string | undefined> = input();
  orders!: WritableSignal<IOrder[]>;
  keyword: WritableSignal<string> = signal("");
  patientRole: Role = Role.Patient;
  superAdminRole: Role = Role.SuperAdmin;
  doctors: IUser[] = DOCTORS;
  patients: IUser[] = PATIENTS;
  profile: Signal<IUser | null> = computed(() => {
    this.orders = this.orderService.getOrdersForPatients((this.email() ? this.email() : this.authService.user()?.email)!);
    return (this.email() ? this.authService.profileByEmail(this.email()!) : this.authService.user)()
  });
  filteredOrders: Signal<IOrder[]> = computed(() => {
    return [...this.orders()?.filter(order => this.keyword()?.length ? order.orderNumber == this.keyword() as any : true )]
  });

}

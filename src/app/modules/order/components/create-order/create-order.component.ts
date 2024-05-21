import { Component, Inject, Injector, inject, OnInit, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../../../auth/models/user.model';
import { PATIENTS } from '../../../../auth/constants/users.constant';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ICart } from '../../../../shared/models/cart.model';
import { Router } from '@angular/router';
import { OrderService } from '../../../../shared/services/order.service';
import { CartService } from '../../../../shared/services/cart.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { IMedicine } from '../../../../core/models/medicine.model';
import { MEDICINES } from '../../../../core/constants/medicines.constant';
export interface DialogData {
  patient: IUser
}

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent {
  cartService: CartService = inject(CartService);
  orderService: OrderService = inject(OrderService);
  router: Router = inject(Router);
  cart: WritableSignal<ICart> = this.cartService.cart;
  dialogRef: MatDialogRef<CreateOrderComponent> = inject(MatDialogRef<CreateOrderComponent>);
  injector:Injector = inject(Injector);
  data: DialogData = this.injector.get(MAT_DIALOG_DATA);
  patients: IUser[] = PATIENTS;
  medicines: IMedicine[] = [...MEDICINES];



  ngOnInit():void {
    console.log("data", this.data);
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.cart().file?.set(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  addOrder():void {
    this.cart().patient.set(this.data.patient);
    const ORDER_NUMBER = this.orderService.orders().length + 1;
    this.dialogRef.close({
      orderNumber: ORDER_NUMBER,
      ...this.cart()
    });
  }
}

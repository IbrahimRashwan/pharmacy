import { Component, WritableSignal, inject } from '@angular/core';
import { ICart } from '../../models/cart.model';
import { MedicineCardComponent } from '../medicine-card/medicine-card.component';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IUser } from '../../../auth/models/user.model';
import { PATIENTS } from '../../../auth/constants/users.constant';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MedicineCardComponent,
    CurrencyPipe,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    JsonPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService: CartService = inject(CartService);
  orderService: OrderService = inject(OrderService);
  router: Router = inject(Router);
  cart: WritableSignal<ICart> = this.cartService.cart;
  patients: IUser[] = PATIENTS;

  addOrder():void {
    const ORDER_NUMBER = this.orderService.orders().length + 1;
    this.orderService.addOrder(this.cart());
    this.router.navigate(['/order', ORDER_NUMBER]);
  }
}

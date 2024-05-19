import { Component, WritableSignal, inject } from '@angular/core';
import { OrderCardComponent } from './order-card/order-card.component';
import { IOrder } from '../../../shared/models/order.model';
import { OrderService } from '../../../shared/services/order.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    OrderCardComponent,
    RouterLink
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  orderService: OrderService = inject(OrderService);
  orders: WritableSignal<IOrder[]> = this.orderService.orders;

}

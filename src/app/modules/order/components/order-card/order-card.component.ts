import { Component, InputSignal, inject, input } from '@angular/core';
import { IOrder } from '../../../../shared/models/order.model';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { OrderService } from '../../../../shared/services/order.service';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss'
})
export class OrderCardComponent {
  orderService: OrderService = inject(OrderService);
  order: InputSignal<IOrder> = input.required();
  displayReorder: InputSignal<boolean> = input(false);


  addOrder():void {
    this.orderService.addOrder(this.order());
  }
}

import { Component, InputSignal, OnInit, WritableSignal, inject, input } from '@angular/core';
import { OrderService } from '../../../../shared/services/order.service';
import { IOrder } from '../../../../shared/models/order.model';
import { OrderCardComponent } from '../order-card/order-card.component';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    OrderCardComponent
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent implements OnInit {
  orderService: OrderService = inject(OrderService);
  orderNumber: InputSignal<number> = input.required();
  order!: WritableSignal<IOrder>;

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder():void {
    this.order = this.orderService.getOrder(this.orderNumber());
  }

}

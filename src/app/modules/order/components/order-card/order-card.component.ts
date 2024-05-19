import { Component, InputSignal, input } from '@angular/core';
import { IOrder } from '../../../../shared/models/order.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss'
})
export class OrderCardComponent {
  order: InputSignal<IOrder> = input.required();
}

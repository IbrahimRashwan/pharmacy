import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { IOrder } from '../models/order.model';
import { ORDERS } from '../constants/orders.constant';
import { CartService } from './cart.service';

@Injectable({providedIn: 'root'})
export class OrderService {
  orders: WritableSignal<IOrder[]> = ORDERS;
  cartService: CartService = inject(CartService);

  addOrder(order: IOrder):void{
    this.orders.update(orders => {
      orders?.push({...order})
      return [...orders]
    });
    this.cartService.emptyCart();
  }

  getOrder(orderNumber:number ):WritableSignal<IOrder> {
    return signal(this.orders().find(order => order.orderNumber == orderNumber)!);
  };

  getOrdersForPatients(email:string):WritableSignal<IOrder[]> {
    return signal(this.orders().filter(order => order.patient()?.email == email)!);
  };


}

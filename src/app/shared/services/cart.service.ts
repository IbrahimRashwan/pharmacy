import { Injectable, WritableSignal, signal } from '@angular/core';
import { ICart } from '../models/cart.model';
import { IMedicine } from '../../core/models/medicine.model';

@Injectable({providedIn: 'root'})
export class CartService {
  cart: WritableSignal<ICart> = signal({
    items: signal([]),
    patient: signal(null),
    medicalAnalysis: signal(""),
    subtotal: signal(0)
  });

  addMedicine(medicine: IMedicine):void{
    this.cart().items.update(items => {
      items?.push(medicine)
      return items
    });
    this.cart().subtotal.set(this.cart().subtotal() + medicine.price);
  }

  removeMedicine(index:number, medicine: IMedicine):void{
    this.cart().items.update(items => {
      items?.splice(index,1);
      return items
    });
    this.cart().subtotal.set(this.cart().subtotal() - medicine.price);
  }

  emptyCart():void {
    this.cart  = signal({
      items: signal([]),
      patient: signal(null),
      medicalAnalysis: signal(""),
      subtotal: signal(0)
    })
  }
}

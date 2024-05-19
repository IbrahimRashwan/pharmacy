import { WritableSignal, signal } from "@angular/core";
import { IOrder } from "../models/order.model";
import { PATIENTS } from "../../auth/constants/users.constant";

export const ORDERS: WritableSignal<IOrder[]> = signal([
  {
    orderNumber: 1,
    items: signal([
      { id: 1, name:'Medicine 1', price: 150, category: 1, image:'assets/img/product-phrmacy.jpeg'},
      { id: 2, name:'Medicine 2', price: 150, category: 1, image:'assets/img/product-phrmacy.jpeg'},
      { id: 3, name:'Medicine 3', price: 150, category: 2, image:'assets/img/product-phrmacy.jpeg'}
    ]),
    subtotal: signal(450),
    medicalAnalysis: signal(""),
    patient: signal(PATIENTS[0])
  },
  {
    orderNumber: 2,
    items: signal([
      { id: 1, name:'Medicine 1', price: 150, category: 1, image:'assets/img/product-phrmacy.jpeg'},
      { id: 2, name:'Medicine 2', price: 150, category: 1, image:'assets/img/product-phrmacy.jpeg'},
      { id: 3, name:'Medicine 3', price: 150, category: 2, image:'assets/img/product-phrmacy.jpeg'}
    ]),
    subtotal: signal(450),
    medicalAnalysis: signal(""),
    patient: signal(PATIENTS[0])
  },
  {
    orderNumber: 3,
    items: signal([
      { id: 1, name:'Medicine 1', price: 150, category: 1, image:'assets/img/product-phrmacy.jpeg'},
      { id: 2, name:'Medicine 2', price: 150, category: 1, image:'assets/img/product-phrmacy.jpeg'},
      { id: 3, name:'Medicine 3', price: 150, category: 2, image:'assets/img/product-phrmacy.jpeg'}
    ]),
    subtotal: signal(450),
    medicalAnalysis: signal(""),
    patient: signal(PATIENTS[0])
  },
])

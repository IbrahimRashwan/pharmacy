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
    deliveryType: signal("Delivery"),
    notes: signal(""),
    file: signal(""),
    patient: signal(PATIENTS[0])
  },
  {
    orderNumber: 1,
    items: signal([
      { id: 1, name:'Medicine 1', price: 150, category: 1, image:'assets/img/product-phrmacy.jpeg'},
      { id: 2, name:'Medicine 2', price: 150, category: 1, image:'assets/img/product-phrmacy.jpeg'},
      { id: 3, name:'Medicine 3', price: 150, category: 2, image:'assets/img/product-phrmacy.jpeg'}
    ]),
    subtotal: signal(450),
    medicalAnalysis: signal(""),
    deliveryType: signal("Phamracy"),
    notes: signal(""),
    file: signal("data:image/png;base64,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"),
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
    deliveryType: signal("Delivery"),
    notes: signal(`
    علاج واحد و 2 و 2
    `),
    file: signal(""),
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
    deliveryType: signal("Delivery"),
    notes: signal(""),
    file: signal(""),
    patient: signal(PATIENTS[0])
  },
])

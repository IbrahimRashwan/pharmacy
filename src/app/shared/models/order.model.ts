import { ICart } from "./cart.model";

export interface IOrder extends ICart {
  orderNumber: number
}

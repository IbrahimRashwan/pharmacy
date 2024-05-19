import { OrderDetailsComponent } from "./components/order-details/order-details.component";
import { OrderComponent } from "./components/order.component";

export default [
  { path:'', component: OrderComponent},
  { path:':orderNumber', component: OrderDetailsComponent},
];

import { Routes } from '@angular/router';
import { authGuardFn } from './auth/guard/auth.guard';
import { Role } from './auth/enums/user-role.enum';

export const routes: Routes = [
  { path:'', redirectTo: '/category', pathMatch:'full'},
  { path:'auth', loadChildren: () => import("./auth/auth.routes"), canActivate: [authGuardFn()]},
  { path:'medicine', loadChildren: () => import("./modules/medicine/medicine.routes"), canActivate: [authGuardFn([Role.Doctor, Role.SuperAdmin])]},
  { path:'category', loadChildren: () => import("./modules/category/category.routes"), canActivate: [authGuardFn([Role.Pharmacy, Role.Doctor, Role.SuperAdmin])]},
  { path:'order', loadChildren: () => import("./modules/order/order.routes"), canActivate: [authGuardFn([Role.Pharmacy, Role.Doctor, Role.SuperAdmin])]},
  { path:'profile', loadChildren: () => import("./modules/profile/profile.routes"), canActivate: [authGuardFn()]},
];

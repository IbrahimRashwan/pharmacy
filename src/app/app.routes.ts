import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:'', redirectTo: '/category', pathMatch:'full'},
  { path:'auth', loadChildren: () => import("./auth/auth.routes")},
  { path:'medicine', loadChildren: () => import("./modules/medicine/medicine.routes")},
  { path:'category', loadChildren: () => import("./modules/category/category.routes")},
];

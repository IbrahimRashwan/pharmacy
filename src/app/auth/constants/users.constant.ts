import { signal } from "@angular/core";
import { Role } from "../enums/user-role.enum";
import { IUser } from "../models/user.model";

export const USERS: IUser[] = [
    {
      name:"doctor",
      email:"doctor@demo.com",
      password:"doctor",
      role: Role.Doctor,
      preferredMedicines: signal([  { id: 1, name:'Medicine 1', price: 150, category: 1, image:'assets/img/product-phrmacy.jpeg'},
    ])
    },
    {
      name:"patient",
      email:"patient@demo.com",
      password:"patient",
      role: Role.Patient,
      preferredMedicines: signal([])
    },
    {
      name:"Super admin",
      email:"superadmin@demo.com",
      password:"superadmin",
      role: Role.SuperAdmin,
      preferredMedicines: signal([])
    },
    {
      name:"pharmacy",
      email:"pharmacy@demo.com",
      password:"pharmacy",
      role: Role.Pharmacy,
      preferredMedicines: signal([])
    }
]

export const PATIENTS: IUser[] = USERS.filter(user => user.role == Role.Patient);
export const DOCTORS: IUser[] = USERS.filter(user => user.role == Role.Doctor);

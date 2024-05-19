import { Role } from "../enums/user-role.enum";
import { IUser } from "../models/user.model";

export const USERS: IUser[] = [
    {
      name:"doctor",
      email:"doctor@demo.com",
      password:"doctor",
      role: Role.Doctor,
    },
    {
      name:"patient",
      email:"patient@demo.com",
      password:"patient",
      role: Role.Patient,
    },
    {
      name:"Super admin",
      email:"superadmin@demo.com",
      password:"superadmin",
      role: Role.SuperAdmin,
    }
]

export const PATIENTS: IUser[] = USERS.filter(user => user.role == Role.Patient);
export const DOCTORS: IUser[] = USERS.filter(user => user.role == Role.Doctor);

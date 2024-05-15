import { Role } from "../enums/user-role.enum";
import { IUser } from "../models/user.model";

export const USERS: IUser[] = [
    {
      email:"doctor@demo.com",
      password:"doctor",
      role: Role.Doctor,
    },
    {
      email:"patient@demo.com",
      password:"patient",
      role: Role.Patient,
    },
    {
      email:"super-admin@demo.com",
      password:"super-admin",
      role: Role.SuperAdmin,
    }
]

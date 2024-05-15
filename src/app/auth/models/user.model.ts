import { Role } from "../enums/user-role.enum";

export interface IUser {
  email: string,
  password: string,
  role?: Role
}

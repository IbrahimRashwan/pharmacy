import { Role } from "../enums/user-role.enum";

export interface IUser {
  name: string,
  email: string,
  password: string,
  role?: Role
}

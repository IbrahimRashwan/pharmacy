import { WritableSignal } from "@angular/core";
import { Role } from "../enums/user-role.enum";
import { IMedicine } from "../../core/models/medicine.model";

export interface IUser {
  name: string,
  email: string,
  password: string,
  preferredMedicines: WritableSignal<IMedicine[]>,
  role?: Role
}

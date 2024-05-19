import { WritableSignal } from "@angular/core";
import { IMedicine } from "../../core/models/medicine.model";
import { IUser } from "../../auth/models/user.model";

export interface ICart {
  items: WritableSignal<IMedicine[]>,
  medicalAnalysis: WritableSignal<string>,
  patient: WritableSignal<IUser | null>,
  subtotal: WritableSignal<number>,
}

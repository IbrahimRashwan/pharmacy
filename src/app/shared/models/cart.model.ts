import { WritableSignal } from "@angular/core";
import { IMedicine } from "../../core/models/medicine.model";
import { IUser } from "../../auth/models/user.model";

export interface ICart {
  items: WritableSignal<IMedicine[]>,
  medicalAnalysis: WritableSignal<string>,
  notes?: WritableSignal<string>,
  file?: WritableSignal<string | ArrayBuffer | null>,
  patient: WritableSignal<IUser | null>,
  subtotal: WritableSignal<number>,
}

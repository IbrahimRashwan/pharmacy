import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { IMedicine } from '../../core/models/medicine.model';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({providedIn:"root"})
export class PreferredMedicineService {
  authService: AuthService = inject(AuthService);
  medicines: WritableSignal<IMedicine[]> = this.authService.user()?.preferredMedicines || signal([]);

  toggleMedicine(medicine: IMedicine):void{
    const MEDICINE_INDEX = this.medicines().findIndex(pMedicine => pMedicine.id == medicine.id);
    this.medicines.update(medicines => {
      if(MEDICINE_INDEX != -1){
        medicines?.splice(MEDICINE_INDEX,1);
      } else {
        medicines?.push(medicine)
      }
      console.log("medicines", medicines);
      return medicines
    });
  }


}

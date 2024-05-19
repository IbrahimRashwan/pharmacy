import { Pipe, PipeTransform, WritableSignal } from '@angular/core';
import { IMedicine } from '../../core/models/medicine.model';

@Pipe({
  name: 'isPreferred',
  standalone: true,
  pure: false
})

export class IsPreferredNamePipe implements PipeTransform {
  transform(preferredMedicines: WritableSignal<IMedicine[]>, id: number): boolean {
    return preferredMedicines()?.findIndex(pMedicine => pMedicine.id == id) != -1;
  }
}

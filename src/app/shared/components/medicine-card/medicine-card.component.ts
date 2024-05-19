import { Component, InputSignal, Output, OutputEmitterRef, Signal, WritableSignal, computed, inject, input, output } from '@angular/core';
import { IMedicine } from '../../../core/models/medicine.model';
import { CurrencyPipe } from '@angular/common';
import { PreferredMedicineService } from '../../services/preferred-medicine.service';
import { IsPreferredNamePipe } from '../../pipes/is-prefrred.pipe';

@Component({
  selector: 'app-medicine-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    IsPreferredNamePipe
  ],
  templateUrl: './medicine-card.component.html',
  styleUrl: './medicine-card.component.scss'
})
export class MedicineCardComponent {
  preferredMedicineService: PreferredMedicineService = inject(PreferredMedicineService);
  medicine: InputSignal<IMedicine> = input.required();
  preferredMedicines: WritableSignal<IMedicine[]> = this.preferredMedicineService.medicines;
  email: InputSignal<string> = input("");
  inCart: InputSignal<boolean> = input(false);
  showActions: InputSignal<boolean> = input(true);
  addMedicine: OutputEmitterRef<null> = output();
  removeMedicine: OutputEmitterRef<null> = output();
}

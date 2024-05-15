import { Component, InputSignal, input } from '@angular/core';
import { IMedicine } from '../../../core/models/medicine.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-medicine-card',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './medicine-card.component.html',
  styleUrl: './medicine-card.component.scss'
})
export class MedicineCardComponent {
  medicine: InputSignal<IMedicine> = input.required();

}

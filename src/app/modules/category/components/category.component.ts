import { Component, InputSignal, WritableSignal, effect, inject, input } from '@angular/core';
import { CATEGORIES } from '../../../core/constants/categories.constant';
import { ICategory } from '../../../core/models/category.model';
import { NgFor } from '@angular/common';
import { CategoryCardComponent } from '../../../shared/components/category-card/category-card.component';
import { IMedicine } from '../../../core/models/medicine.model';
import { MEDICINES } from '../../../core/constants/medicines.constant';
import { MedicineCardComponent } from '../../../shared/components/medicine-card/medicine-card.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';
import { ICart } from '../../../shared/models/cart.model';
import { CartComponent } from '../../../shared/components/cart/cart.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CategoryCardComponent,
    MedicineCardComponent,
    NgFor,
    RouterLink,
    CartComponent
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  selectedCategory: InputSignal<number> = input(0);
  categories: ICategory[] = CATEGORIES;
  medicines: IMedicine[] = [...MEDICINES];
  cartService: CartService = inject(CartService);
  cart: WritableSignal<ICart> = this.cartService.cart;

  constructor(){
    effect(() => {
      this.filterMedicines();
    })
  }

  filterMedicines(): void {
    if(this.selectedCategory()){
      this.medicines = [...MEDICINES]?.filter(medicine => medicine.category == this.selectedCategory());
    } else {
      this.medicines = [...MEDICINES];
    }
  }
}

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
import { AuthService } from '../../../auth/services/auth.service';
import { PreferredMedicineService } from '../../../shared/services/preferred-medicine.service';
import { IUser } from '../../../auth/models/user.model';
import { Role } from '../../../auth/enums/user-role.enum';

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
  #authService: AuthService = inject(AuthService);
  preferredMedicine: WritableSignal<IMedicine[]> = this.#authService.user()?.preferredMedicines!;
  cartService: CartService = inject(CartService);
  profile: WritableSignal<IUser | null> = this.#authService.user;
  selectedCategory: InputSignal<number> = input(0);
  email: InputSignal<string> = input("");
  categories: ICategory[] = CATEGORIES;
  medicines: IMedicine[] = [...MEDICINES];
  cart: WritableSignal<ICart> = this.cartService.cart;
  pharmacyRole: Role = Role.Pharmacy;

  constructor(){
    effect(() => {
      this.filterMedicines();
    })
  }

  filterMedicines(): void {
    const PREFERRED_MEDICINES = this.email() ? this.#authService.profileByEmail(this.email())()?.preferredMedicines!() : MEDICINES;

    this.medicines = [...PREFERRED_MEDICINES!]?.filter(medicine => this.selectedCategory() ? medicine.category == this.selectedCategory() : true)
  }
}

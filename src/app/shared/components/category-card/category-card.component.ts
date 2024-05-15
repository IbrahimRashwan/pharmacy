import { Component, InputSignal, input } from '@angular/core';
import { ICategory } from '../../../core/models/category.model';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  category: InputSignal<ICategory> = input.required();
}

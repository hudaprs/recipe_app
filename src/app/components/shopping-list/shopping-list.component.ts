import { Component } from '@angular/core';
import { Ingredient } from '../../models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Milk', 1),
    new Ingredient('Sauce', 1),
  ];
}

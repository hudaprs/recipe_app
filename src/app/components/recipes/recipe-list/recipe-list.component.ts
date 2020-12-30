import { Component } from '@angular/core';
import { Recipe } from '../../../models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'Test Recipe',
      'https://cdn.pixabay.com/photo/2020/12/20/10/01/advent-5846564_960_720.jpg'
    ),
    new Recipe(
      'Test',
      'Test Recipe',
      'https://cdn.pixabay.com/photo/2020/12/20/10/01/advent-5846564_960_720.jpg'
    ),
    new Recipe(
      'Test',
      'Test Recipe',
      'https://cdn.pixabay.com/photo/2020/12/20/10/01/advent-5846564_960_720.jpg'
    ),
  ];
}

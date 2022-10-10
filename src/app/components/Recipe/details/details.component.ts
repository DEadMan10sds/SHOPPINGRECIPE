import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  recipe: RecipeModel;
  id: number;

  constructor(
    private slService: ShoppingListService,
    private currentRoute: ActivatedRoute,
    private recipeService: RecipeService
    ) { }

  ngOnInit(): void {
    //this.recipe = this.recipeService.getSingleRecipe(+this.currentRoute.snapshot.params['id']);
    this.currentRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getSingleRecipe(this.id);
      }
    );
  }

  addToShoppingList() {
    this.slService.addVariousIngredients(this.recipe.ingredients)
  }

}

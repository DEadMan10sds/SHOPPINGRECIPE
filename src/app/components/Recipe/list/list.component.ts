import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  recipes: RecipeModel[];
  recupesArraySubscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recupesArraySubscription = this.recipeService.recipeChanges.subscribe(
      (recipes: RecipeModel[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
      this.recupesArraySubscription.unsubscribe();
  }
}

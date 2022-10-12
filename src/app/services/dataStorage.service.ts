import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { RecipeModel } from "../components/Recipe/recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({
  providedIn: 'root'
})
export class dataStorageService
{
  constructor(private http: HttpClient, private recipeService: RecipeService){}

  saveRecipes()
  {
    const recipes = this.recipeService.getRecipes();
    this.http.put<RecipeModel[]>(
      'https://angularprojectmax-default-rtdb.firebaseio.com/recipes.json',
      recipes
    )
    .subscribe();
  }

  getRecipes()
  {
    return this.http
      .get<RecipeModel[]>(
        'https://angularprojectmax-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}

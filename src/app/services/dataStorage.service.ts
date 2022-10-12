import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
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
    ).subscribe();
  }

  getRecipes()
  {
    this.http.get<RecipeModel[]>('https://angularprojectmax-default-rtdb.firebaseio.com/recipes.json')
      .subscribe(
        response => {
          this.recipeService.setRecipes(response);
        }
      );
  }

}

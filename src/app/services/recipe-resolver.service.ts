import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RecipeModel } from "../components/Recipe/recipe.model";
import { dataStorageService } from "./dataStorage.service";
import { RecipeService } from "./recipe.service";

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<RecipeModel[]>
{

  constructor(private dataStorageServ: dataStorageService, private recipeService: RecipeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    const recipes = this.recipeService.getRecipes();
    if(recipes.length === 0) return this.dataStorageServ.getRecipes();
    return recipes;
  }
}


import { Subject } from 'rxjs';
import { Ingredient } from '../components/ingredients.model';
import { RecipeModel } from '../components/Recipe/recipe.model';

export class RecipeService{

  recipeChanges = new Subject<RecipeModel[]>();

  private recipes: RecipeModel[] = [];

  getRecipes(){
    return this.recipes.slice();//Regresa una copia del arreglo
  }

  getSingleRecipe(id: number){
    return this.recipes[id];
  }

  setRecipes(recipeArray: RecipeModel[])
  {
    this.recipes = recipeArray;
    this.recipeChanges.next(this.recipes.slice());
  }

  updateRecipe(recipeToUpdate: number, updatedRecipe: RecipeModel)
  {
    this.recipes[recipeToUpdate] = updatedRecipe;
    this.recipeChanges.next(this.recipes.slice());
  }

  addRecipe(newRecipe: RecipeModel)
  {
    this.recipes.push(newRecipe);
    this.recipeChanges.next(this.recipes.slice());
  }

  deleteRecipe(recipeToDelete: number)
  {
    this.recipes.splice(recipeToDelete, 1);
    this.recipeChanges.next(this.recipes.slice());
  }

  deleteIngredientOfRecipe(recipeID: number, ingredientID: number)
  {
    this.recipes[recipeID].ingredients.splice(ingredientID, 1);
    this.recipeChanges.next(this.recipes.slice());
  }

}

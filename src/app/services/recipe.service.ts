
import { Subject } from 'rxjs';
import { Ingredient } from '../components/ingredients.model';
import { RecipeModel } from '../components/Recipe/recipe.model';

export class RecipeService{

  recipeChanges = new Subject<RecipeModel[]>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      "Hamburgesa",
      "Hamburguesa de res",
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
      [
        new Ingredient("Carne", 1),
        new Ingredient("Lechuga", 1),
        new Ingredient("Jitomate", 2),
        new Ingredient("Aguacate", 1)
      ]
    ),
    new RecipeModel(
      "Test1",
      "Tengo asfasfa",
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
      [

      ])
  ];

  getRecipes(){
    return this.recipes.slice();//Regresa una copia del arreglo
  }

  getSingleRecipe(id: number){
    return this.recipes[id];
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

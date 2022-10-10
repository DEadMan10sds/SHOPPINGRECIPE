import { Subject } from "rxjs";
import { Ingredient } from "../Components/ingredients.model";

export class ShoppingListService{

  ingredientsChange = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>;

  private ingredients: Ingredient[] = [
    new Ingredient('Manzanas', 5),
    new Ingredient('Papas', 2)
  ];


  getshoppingList(){
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addVariousIngredients(arrayIngredients: Ingredient[]){
    this.ingredients.push(...arrayIngredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  getSingleItem(index: number)
  {
    return this.ingredients[index];
  }

  updateItem(index: number, updatedIngredient: Ingredient)
  {
    this.ingredients[index] = updatedIngredient;
    this.ingredientsChange.next(this.ingredients.slice());
  }


  deleteItem(index: number)
  {
    this.ingredients.splice(index, 1);
    this.ingredientsChange.next(this.ingredients.slice());
  }

}

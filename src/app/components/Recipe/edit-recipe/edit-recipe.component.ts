import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id: number;
  editingMode: boolean = false;
  currentRecipe: RecipeModel = new RecipeModel('', '', '', null);
  recipeForm: FormGroup;

  constructor(
    private currentRoute: ActivatedRoute,
    private currentRecipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editingMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm()
  {
    let currentIngredients = new FormArray([]);
    if(this.editingMode) {
      this.currentRecipe = this.currentRecipeService.getSingleRecipe(this.id);
      if(this.currentRecipe['ingredients'])
      {
        for(let ingredient of this.currentRecipe.ingredients)
        {
          currentIngredients.push(
            new FormGroup(
              {
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount, [Validators.required, Validators.min(1)])
              }
            ),
          )
        }
      }
    }

    this.recipeForm = new FormGroup(
      {
        'name': new FormControl(this.currentRecipe.name, Validators.required),
        'description': new FormControl(this.currentRecipe.description, Validators.required),
        'imagePath': new FormControl(this.currentRecipe.imagePath, Validators.required),
        'ingredients': currentIngredients
      }
    );
  }


  onSubmit()
  {
    if(!this.editingMode) this.currentRecipeService.addRecipe(this.recipeForm.value);
    else this.currentRecipeService.updateRecipe(this.id, this.recipeForm.value);
    this.onRedirect();
  }

  get controls()
  {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient()
  {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup(
        {
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [Validators.required, Validators.min(1)])
        }
      )
    );
  }

  onDeleteIngredient(ingredientIndex: number)
  {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(ingredientIndex);
    //this.currentRecipeService.deleteIngredientOfRecipe(this.id, ingredientIndex);
    //(this.recipeForm.get('ingredients') as FormArray).
  }

  onDeleteAllIngredients()
  {
    (this.recipeForm.get('ingredients') as FormArray).clear();
  }


  onClearForm()
  {
    this.recipeForm.reset();
  }

  onRedirect()
  {
    this.router.navigate(['/recipes']);
  }

}

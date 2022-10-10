import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from '../../ingredients.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponentShopping implements OnInit, OnDestroy {

  @ViewChild('editForm', {static: false}) slForm: NgForm;
  subscription: Subscription;
  itemToEdit: Ingredient;
  itemEdited: number;
  editMode: boolean = false;
  deleteItem: boolean = false;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppinglistService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.deleteItem = true;
        this.itemEdited = index;
        this.itemToEdit = this.shoppinglistService.getSingleItem(index);
        this.slForm.setValue(
          {
            ingredientName: this.itemToEdit.name,
            amount: this.itemToEdit.amount
          }
        );
      }
    );
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.ingredientName, value.amount);
    this.onClearForm();
    if(!this.editMode) return this.shoppinglistService.addIngredient(newIngredient);
    this.editMode = false;
    this.shoppinglistService.updateItem(this.itemEdited, newIngredient);
  }

  onClearForm()
  {
    this.slForm.reset();
  }

  onDeleteItem()
  {
    this.onClearForm()
    this.shoppinglistService.deleteItem(this.itemEdited)
  }


  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }



}

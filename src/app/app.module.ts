import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModel } from './app-routing.module';
import { AppComponent } from './app.component';

//Customs
import {HeaderComponent} from './components/Header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/Recipe/list/list.component';
import { DetailsComponent } from './Components/Recipe/details/details.component';
import { ItemComponent } from './Components/Recipe/list/item/item.component';
import { Recipe } from './components/Recipe/recipe.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { EditComponentShopping } from './Components/shopping-list/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './directivas/dropdown.directive';
import { ShoppingListService } from './services/shopping-list.service';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { EditRecipeComponent } from './components/Recipe/edit-recipe/edit-recipe.component';
import { RecipeService } from './services/recipe.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DetailsComponent,
    ItemComponent,
    Recipe,
    ShoppingListComponent,
    EditComponentShopping,
    DropdownDirective,
    SelectRecipeComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModel,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./Components/Recipe/details/details.component";
import { EditRecipeComponent } from "./components/Recipe/edit-recipe/edit-recipe.component";
import { Recipe } from "./components/Recipe/recipe.component";
import { ShoppingListComponent } from "./Components/shopping-list/shopping-list.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";
import { RecipesResolverService } from "./services/recipe-resolver.service";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: Recipe,
    //resolve: [RecipesResolverService],
    children: [
      {
        path: '',
        component: SelectRecipeComponent,
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: EditRecipeComponent
      },
      {
        path: ':id',
        component: DetailsComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: EditRecipeComponent,
        resolve: [RecipesResolverService]
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModel{}

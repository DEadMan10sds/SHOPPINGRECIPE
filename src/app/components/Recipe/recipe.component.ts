import { Component, OnInit } from "@angular/core";
import { RecipeService } from "src/app/services/recipe.service";

  @Component({
    selector: 'Recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css'],
    providers:[RecipeService]
  })
  export class Recipe implements OnInit{

    constructor(){}

    ngOnInit(): void {}
  }

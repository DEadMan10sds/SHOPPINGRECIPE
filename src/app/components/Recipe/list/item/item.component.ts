import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../../recipe.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Input() index: number;

  ngOnInit(): void {
  }
}

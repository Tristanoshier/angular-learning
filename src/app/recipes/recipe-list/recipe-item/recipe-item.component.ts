import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //Input decorator is used to recieve data while the output component is used to send data out
  //Seems link Input is used for properties and Output is used for event listeners (EventEmitter) onClick, onChange, etc...
   @Input() recipe: Recipe;
   @Output() recipeSelected = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

}

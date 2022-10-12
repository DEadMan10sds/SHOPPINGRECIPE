import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { dataStorageService } from "src/app/services/dataStorage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Output('selectSection') sectionSelected = new EventEmitter<string>();
  collapsed: Boolean = true;

  constructor(private dataStorageService: dataStorageService){}

  ngOnInit(): void {
      this.onFetchRecipes();
  }

  onSelect(section: string){
    this.sectionSelected.emit(section);
  }

  onSaveRecipes()
  {
    this.dataStorageService.saveRecipes();
  }

  onFetchRecipes()
  {
    this.dataStorageService.getRecipes();
  }
}

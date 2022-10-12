import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { dataStorageService } from "src/app/services/dataStorage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Output('selectSection') sectionSelected = new EventEmitter<string>();
  collapsed: Boolean = true;

  constructor(private httpService: dataStorageService){}

  ngOnInit()
  {
    this.onFetchRecipes();
  }

  onSelect(section: string){
    this.sectionSelected.emit(section);
  }

  onSaveRecipes()
  {
    this.httpService.saveRecipes();
  }

  onFetchRecipes()
  {
    this.httpService.getRecipes();
  }

}

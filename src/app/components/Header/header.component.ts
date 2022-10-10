import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  @Output('selectSection') sectionSelected = new EventEmitter<string>();
  collapsed: Boolean = true;

  onSelect(section: string){
    this.sectionSelected.emit(section);
  }
}

import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-hero2',
  imports: [SearchBarComponent, MatIcon],
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.css'
})
export class Hero2Component {

}

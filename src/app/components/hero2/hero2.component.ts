import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from '@angular/material/button';


@Component({
  selector: 'app-hero2',
  imports: [SearchBarComponent, MatIcon, MatIconButton],
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.css'
})
export class Hero2Component {

}

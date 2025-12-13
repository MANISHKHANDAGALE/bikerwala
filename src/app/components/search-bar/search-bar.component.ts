import { Component } from '@angular/core';
import {MatIconButton ,MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule,MatIconButton],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
 faMagnifyingGlass=faMagnifyingGlass
}

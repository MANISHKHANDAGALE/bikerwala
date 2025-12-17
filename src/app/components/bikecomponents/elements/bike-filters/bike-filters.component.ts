import { Component } from '@angular/core';
import { SortDropdownComponent } from "../sort-dropdown/sort-dropdown.component";

@Component({
  selector: 'app-bike-filters',
  imports: [SortDropdownComponent],
  templateUrl: './bike-filters.component.html',
  styleUrl: './bike-filters.component.css'
})
export class BikeFiltersComponent {

}

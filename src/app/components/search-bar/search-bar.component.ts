import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import {MatIconButton ,MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BIKE_SEARCH_DATA } from '../../dummy-data';
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule, MatIconButton, CommonModule, MatIcon],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  show=false
   toggleShow(){
    this.show=!this.show
  }
 faMagnifyingGlass=faMagnifyingGlass
 query = ''
 suggestions = signal<string[]>([])
 recentSearch = signal<string[]>([])
 placeholder = input<string>('Search')
 width = input<string>('100%')
 private timer! : ReturnType<typeof setTimeout>
 onSearch(val:string){
  this.query = val
  clearTimeout(this.timer)
  this.timer = setTimeout(()=>{
    console.log("debounce value :",this.query)
    const term = this.query.toLowerCase();
    this.recentSearch().push(this.query)
    const data = [
      ...BIKE_SEARCH_DATA.bikes,
      ...BIKE_SEARCH_DATA.brands,
      ...BIKE_SEARCH_DATA.categories,
      ...BIKE_SEARCH_DATA.engineCCRanges,
      ...BIKE_SEARCH_DATA.priceRanges
    ]
    this.suggestions.set(data.filter((item)=> item.toLowerCase().includes(term)).slice(0,8))
    console.log("searched :",this.suggestions())
    console.log(" recent searched :",this.recentSearch())
  },1000)

 }
}

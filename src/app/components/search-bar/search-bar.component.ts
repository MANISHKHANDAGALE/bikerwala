import { CommonModule } from '@angular/common';
import { Component, effect, ElementRef, HostListener, inject, input, signal, ViewChild } from '@angular/core';
import {MatIconButton ,MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BIKE_SEARCH_DATA } from '../../dummy-data';
import { MatIcon } from "@angular/material/icon";
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule, MatIconButton, CommonModule, MatIcon],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  LeftIcon = input<boolean>(false);
 show = false;
@ViewChild('wrapper') wrapper!: ElementRef;
router = inject(Router)
@HostListener('document:click', ['$event'])
handleOutsideClick(event: MouseEvent) {
  if (!this.wrapper.nativeElement.contains(event.target)) {
    this.close();
  }
}

open() {
  this.show = true;
}

close() {
  this.show = false;
}
selectedBike(){
  if(this.query !== ''){
    this.router.navigate(['/brand/bikebrand'],{
    queryParams:{
      bike : this.query
    }
    })
    this.close();
    this.query = ''
  }
  else{
    alert("Please Enter Bike Name")
  }
}
selectedSearch(item:string){
    this.router.navigate(['/brand/bikebrand'],{
    queryParams:{
      bike : item
    }
    })
    this.query = ''
    this.close();
}
select(value: string) {
  this.query = value;
  this.onSearch(value);

}
 faMagnifyingGlass=faMagnifyingGlass
 query = ''
 suggestions = signal<string[]>([])
 recentSearch:string[] = []
 placeholder = input<string>('Search')
 width = input<string>('100%')
 constructor(){
  const stored = localStorage.getItem('recent_search')
  if(stored){
  //  this.recentSearch.push(JSON.parse(stored))
  this.recentSearch = JSON.parse(stored)
  }
 }
 delete(item:any){
 this.recentSearch = this.recentSearch.filter((i) => i !== item)
 localStorage.setItem('recent_search',JSON.stringify(this.recentSearch))
 }
 private timer! : ReturnType<typeof setTimeout>
 onSearch(val:string){
  this.query = val
  clearTimeout(this.timer)
  this.timer = setTimeout(()=>{
    console.log("debounce value :",this.query)
    const term = this.query.toLowerCase();
    this.recentSearch.push(this.query)
    localStorage.setItem('recent_search',JSON.stringify(this.recentSearch))
    const data = [
      ...BIKE_SEARCH_DATA.bikes,
      ...BIKE_SEARCH_DATA.brands,
      ...BIKE_SEARCH_DATA.categories,
      ...BIKE_SEARCH_DATA.engineCCRanges,
      ...BIKE_SEARCH_DATA.priceRanges
    ]
    this.suggestions.set(data.filter((item)=> item.toLowerCase().includes(term)).slice(0,5))
    console.log("searched :",this.suggestions())
    console.log(" recent searched :",this.recentSearch)
    this.recentSearch = this.recentSearch.filter((i)=> i !== '').slice(0,5)
  },500)
 }
}

import { CommonModule } from '@angular/common';
import { Component, effect, ElementRef, HostListener, inject, input, signal, ViewChild } from '@angular/core';
import {MatIconButton ,MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BIKE_SEARCH_DATA } from '../../dummy-data';
import { MatIcon } from "@angular/material/icon";
import { Router } from '@angular/router';
import { Allbike } from '../../data/all_bikes';
import { getAllBikesFlat } from '../../utils/bike.utils';
import { Prodcuts } from '../../data/data';
import { ToasterService } from '../../services/toaster.service';
@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule, MatIconButton, CommonModule, MatIcon],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
 LeftIcon = input<boolean>(false);
 show = false;
 faMagnifyingGlass=faMagnifyingGlass
 query = ''
 suggestions = signal<Prodcuts[]>([])
 recentSearch:string[] = []
 placeholder = input<string>('Search')
 width = input<string>('100%')
 toaster = inject(ToasterService)
@ViewChild('wrapper') wrapper!: ElementRef;
router = inject(Router)
@HostListener('document:click', ['$event'])
handleOutsideClick(event: MouseEvent) {
  if (!this.wrapper.nativeElement.contains(event.target)) {
    this.close();
  }
}
 constructor(){
  const stored = localStorage.getItem('recent_search')
  if(stored){
  //  this.recentSearch.push(JSON.parse(stored))
  this.recentSearch = JSON.parse(stored)
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
    // alert("Please Enter Bike Name")
    this.toaster.error("Please Enter Bike Name")
  }
}
selectedSearch(bike:Prodcuts){
    const brandSlug = bike.brand?.toLowerCase().replace(/\s+/g, '-') ?? 'brand';
    this.router.navigate([brandSlug,bike.slug])
    this.recentSearch.push(bike.title)
    this.recentSearch = this.recentSearch.map((m)=>m).slice(-5)
    localStorage.setItem('recent_search',JSON.stringify(this.recentSearch))
    this.query = ''
    this.close();
}
select(value: any) {
  this.query = value;
  this.onSearch(value);
}
 delete(item:any){
 this.recentSearch = this.recentSearch.filter((i) => i !== item)
 localStorage.setItem('recent_search',JSON.stringify(this.recentSearch))
 }
 private timer! : ReturnType<typeof setTimeout>
 onSearch(val:any){
  this.query = val
  clearTimeout(this.timer)
  this.timer = setTimeout(()=>{
    // console.log("debounce value :",this.query)
    const term = this.query.trim().toLowerCase();
    if(!term){
      this.suggestions.set([]);
      return;
    }
    const bikes = getAllBikesFlat()
    // console.log(bikes)
    const filtered = bikes.filter( bike => bike.brand?.toLowerCase().includes(term) || bike.title.toLowerCase().includes(term) || bike.category?.toLowerCase().includes(term) )
    this.suggestions.set(filtered)
    // console.log("bikesFlat",bikes)
    // console.log("filtered bikes",filtered)
    // this.suggestions.set(data.filter((item)=> item.toLowerCase().includes(term)).slice(0,5))
    // console.log("searched :",this.suggestions())
    // console.log(" recent searched :",this.recentSearch)
    // this.recentSearch = this.recentSearch.filter((i)=> i !== '').slice(0,5)
  },500)
 }
}

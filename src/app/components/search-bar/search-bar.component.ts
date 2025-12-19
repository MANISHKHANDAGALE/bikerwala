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
  this.query = ''
}
private slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '') // remove special chars
    .replace(/\s+/g, '-')        // spaces → hyphen
    .replace(/-+/g, '-');        // remove duplicate hyphens
}

selectedBike(val:string){
if(!val.trim()){
this.toaster.error("Please Enter Bike Name");
return
}
const word = val.trim().split(' ')
const brandName = word.slice(0,2).join(' ')
const bikeName = word.slice(2).join(' ')
const brandSlug = this.slugify(brandName)
const bikeSlug = this.slugify(bikeName)
this.router.navigate(['/',brandSlug,bikeSlug])
this.close()
}
selectedSearch(bike:Prodcuts){
    const brandSlug = bike.brand?.toLowerCase().replace(/\s+/g, '-') ?? 'brand';
    this.router.navigate([brandSlug,bike.slug])
    this.recentSearch.push(bike.title)
    this.recentSearch = this.recentSearch.map((m)=>m).slice(-5)
    localStorage.setItem('recent_search',JSON.stringify(this.recentSearch))
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
  },500)
 }
}

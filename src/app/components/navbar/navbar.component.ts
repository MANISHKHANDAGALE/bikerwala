import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButton,MatIconButton ,MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars,faLocationDot,faLanguage, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import gsap from 'gsap'
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, MatIconButton, FontAwesomeModule, SearchBarComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  faMagnifyingGlass=faMagnifyingGlass
  menu = [
  { label: 'Home', icon: 'home', open: false },

  {
    label: 'New Bikes',
    icon: 'two_wheeler',
    icon2: 'keyboard_arrow_down',
    open: false,
    children: ['Upcoming', 'Popular']
  },

  {
    label: 'New Scooters',
    icon: 'electric_scooter',
    icon2: 'keyboard_arrow_down',
    open: false,
    children: ['Top Scooters']
  },

  { label: 'Electric Bikes', icon: 'bolt', open: false },

  { label: 'Bike Loan', icon: 'account_balance_wallet', open: false },

  { label: 'Used Bikes', icon: 'history', open: false },

  {
    label: 'Sell Bikes',
    icon: 'sell',
    icon2: 'keyboard_arrow_down',
    open: false,
    children: ['Sell Your Bike']
  },

  { label: 'Reviews', icon: 'chat', open: false },

  {
    label: 'News, Videos & Tips',
    icon: 'article',
    icon2: 'keyboard_arrow_down',
    open: false,
    children: ['News', 'Videos']
  },

  { label: 'EMI Calculator', icon: 'calculate', open: false },

  { label: 'Login', icon: 'person', open: false }
];

   togglediv(item:any){
   item.open = !item.open
   }
   private t1!: gsap.core.Timeline;
   faBar = faBars;
   faLocationDot = faLocationDot
   faLanguage=faLanguage
   ngAfterViewInit() {
    this.t1 = gsap.timeline({paused:true})
    this.t1.to('.overlay',{
      display:'block',
      opacity:100,
      duration:0.3,
      ease:'back.in'
    })
     this.t1.fromTo('.sidebar',{
     x:'-100%'
    },{
      x: '0%',
      delay:0.1,
      duration: 0.5,
      ease: 'power3.out',
      left:0,
    },'<')
    this.t1.reverse();

}
togglemenu() {
  this.t1.reversed(!this.t1.reversed())
}
close(){
  this.t1.reverse()
}
}

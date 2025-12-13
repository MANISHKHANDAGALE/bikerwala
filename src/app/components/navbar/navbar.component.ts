import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButton,MatIconButton ,MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars,faLocationDot,faLanguage } from '@fortawesome/free-solid-svg-icons';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import gsap from 'gsap'
@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, MatIconButton, FontAwesomeModule, SearchBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
   private t1!: gsap.core.Timeline;
   faBar = faBars;
   faLocationDot = faLocationDot
   faLanguage=faLanguage
   ngAfterViewInit() {
    this.t1 = gsap.timeline({paused:true})
    this.t1.to('.sidebar',{
      left:0,
      duration:1,
      ease:'power1.in'
    })
    this.t1.reverse();

}
togglemenu() {
  this.t1.reversed(!this.t1.reversed())
}
}

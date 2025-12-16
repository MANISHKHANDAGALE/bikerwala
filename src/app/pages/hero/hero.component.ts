import { Component, HostListener, OnInit } from '@angular/core';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-hero',
  imports: [SearchBarComponent, MatButton],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  ngOnInit() {
      this.UpdateWidth()
  }
widthpx = '540px'

@HostListener('window:resize')
UpdateWidth(){
this.widthpx = window.innerWidth > 640 ? '540px' : '400px'
}
}

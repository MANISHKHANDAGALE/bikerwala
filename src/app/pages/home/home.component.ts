import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SliderComponent } from "../../components/slider/slider.component";
import { ExplorerComponent } from "../../components/explorer/explorer.component";
import { Hero2Component } from "../../components/hero2/hero2.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FooterComponent, ExplorerComponent, Hero2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

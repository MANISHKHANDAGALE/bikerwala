import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SliderComponent } from "../../components/slider/slider.component";
import { ExplorerComponent } from "../../components/explorer/explorer.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FooterComponent, ExplorerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

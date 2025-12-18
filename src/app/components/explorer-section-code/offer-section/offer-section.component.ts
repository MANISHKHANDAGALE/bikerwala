import { Component } from '@angular/core';
import { SliderComponent } from "../../slider/slider.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from "../../card/card.component";
import { Prodcuts, productsList } from '../../../data/data';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-offer-section',
  imports: [SliderComponent, CardComponent],
  templateUrl: './offer-section.component.html',
  styleUrl: './offer-section.component.css',
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class OfferSectionComponent {
  
  spaceBetween = 5;
  loop = true;
  navigation = true;
  breakpoints = {
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // no 1280+ breakpoint → falls back to slidesPerView = 4
  };

  slides: Prodcuts[] = [];

  ngOnInit() {
    this.slides = this.getRandomBikes(productsList, 18);
  }

  private getRandomBikes(list: Prodcuts[], count: number): Prodcuts[] {
    return [...list]
      .filter(bike => bike.priceExShowroom) // only priced bikes
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  }

}

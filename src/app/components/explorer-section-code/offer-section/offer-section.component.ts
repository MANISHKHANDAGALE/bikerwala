import { Component } from '@angular/core';
import { SliderComponent } from '../../slider/slider.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { Prodcuts, productsList } from '../../../data/data';
import { RouterLink } from '@angular/router';

interface OfferBike extends Prodcuts {
  displayPrice?: string;
}

@Component({
  selector: 'app-offer-section',
  imports: [SliderComponent, CardComponent, RouterLink],
  templateUrl: './offer-section.component.html',
  styleUrl: './offer-section.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
  };

  slides: OfferBike[] = [];

  ngOnInit() {
    this.slides = this.getRandomBikes(productsList, 18);
  }

  private getRandomBikes(list: Prodcuts[], count: number): OfferBike[] {
    return [...list]
      .filter(bike => bike.priceExShowroom)
      .sort(() => 0.5 - Math.random())
      .slice(0, count)
      .map(bike => ({
        ...bike,
        displayPrice: this.formatPrice(bike.priceExShowroom!)
      }));
  }

  private formatPrice(price: number): string {
    return price.toLocaleString('en-IN');
  }
}

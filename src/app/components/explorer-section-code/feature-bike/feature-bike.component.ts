import { CurrencyPipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from "../../slider/slider.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { Prodcuts, productsList } from '../../../data/data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-bike',
  imports: [NgClass, SliderComponent, UpperCasePipe, RouterLink ],
  templateUrl: './feature-bike.component.html',
  styleUrl: './feature-bike.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureBikeComponent {

  loop = true;
  navigation = true;
  breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 5 },
    640: { slidesPerView: 2, spaceBetween: 5 },
    1250: { slidesPerView: 3, spaceBetween: 15 }
  };

  categories = ['trending', 'popular', 'electric', 'upcoming'];

  selectedCategory: string = 'trending';

  bikes: Prodcuts[] = productsList;

  /* 🔹 Cached filtered list */
  get filteredBikes(): Prodcuts[] {
    return this.bikes.filter(bike =>
      bike.tags?.includes(this.selectedCategory)
    );
  }

  onCategorySelect(category: string) {
    this.selectedCategory = category;
  }


}


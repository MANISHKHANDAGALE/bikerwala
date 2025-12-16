import { NgClass, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { Prodcuts, productsList } from '../../data/data';

@Component({
  selector: 'app-feature-bike',
  imports: [NgClass, SliderComponent, UpperCasePipe],
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
    1250: { slidesPerView: 3, spaceBetween: 10 }
  };

  categories = ['trending', 'popular', 'electric', 'upcoming'];

  selectedCategory: string = 'trending';

  // bikes: Prodcuts[] = productsList;

  /* 🔹 Cached filtered list */
  // get filteredBikes(): Prodcuts[] {
  //   return this.bikes.filter(bike =>
  //     bike.tags?.includes(this.selectedCategory)
  //   );
  // }

  onCategorySelect(category: string) {
    this.selectedCategory = category;
  }


  slides = [
    {
      id: 1,
      title: 'slide 1',
      description: "This is the description for slide 1"

    },
    {
      id: 2,
      title: 'slide 2',
      description: "This is the description for slide 2"

    },
    {
      id: 3,
      title: 'slide 3',
      description: "This is the description for slide 3"

    },
    {
      id: 4,
      title: 'slide 4',
      description: "This is the description for slide 4"

    },
    {
      id: 4,
      title: 'slide 4',
      description: "This is the description for slide 4"

    },
    {
      id: 4,
      title: 'slide 4',
      description: "This is the description for slide 4"

    },
    {
      id: 4,
      title: 'slide 4',
      description: "This is the description for slide 4"

    },
    {
      id: 4,
      title: 'slide 4',
      description: "This is the description for slide 4"

    },
  ]
}


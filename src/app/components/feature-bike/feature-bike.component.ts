import { NgClass, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"

@Component({
  selector: 'app-feature-bike',
  imports: [NgClass, TitleCasePipe, SliderComponent],
  templateUrl: './feature-bike.component.html',
  styleUrl: './feature-bike.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureBikeComponent {

  slidesPerView = 3;
  spaceBetween = 10;
  loop = true;
  navigation = true;
  breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 5 },
    640: { slidesPerView: 2, spaceBetween: 5 },
    1250: { slidesPerView: 3, spaceBetween: 10 }
  };

  categories = ["trending", "electric", "upcoming", "popular"]

  selectedCategory = "trending"

  onCategorySelect(category: string){
     this.selectedCategory = category;
     console.log(this.selectedCategory)
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


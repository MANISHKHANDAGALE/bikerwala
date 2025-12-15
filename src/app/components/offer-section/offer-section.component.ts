import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from "../card/card.component";

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
      slidesPerView: 1,
      spaceBetween: 8,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
    // no 1280+ breakpoint → falls back to slidesPerView = 4
  };

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

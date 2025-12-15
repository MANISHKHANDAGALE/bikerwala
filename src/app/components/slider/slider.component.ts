import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SliderComponent {
  @Input() slidesPerView = 3 ;
  @Input() spaceBetween = 10;
  @Input() loop = true;
  @Input() breakpoints = {};
  @Input() navigation: boolean | any = false;
  @Input() containerClass = '';

}

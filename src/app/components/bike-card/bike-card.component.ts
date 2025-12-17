import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeRatingComponent } from '../bike-rating/bike-rating.component';
import { BikeSpecsComponent } from '../bike-specs/bike-specs.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-bike-card',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
],
  templateUrl: './bike-card.component.html'
})
export class BikeCardComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() price!: string;
  @Input() rating!: number;
  @Input() reviews!: number;
  @Input() specs!: string[];
  @Input() location!: string;
}

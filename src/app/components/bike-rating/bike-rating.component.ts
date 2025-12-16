import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bike-rating.component.html'
})
export class BikeRatingComponent {
  @Input() rating!: number;
  @Input() reviews!: number;
}

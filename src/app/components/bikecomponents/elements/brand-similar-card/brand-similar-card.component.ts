import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../card/card.component';

@Component({
  selector: 'app-brand-similar-card',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './brand-similar-card.component.html'
})
export class BrandSimilarCardComponent {
  @Input() brands: {
    name: string;
    logo: string;
    bikes: number;
  }[] = [];
}

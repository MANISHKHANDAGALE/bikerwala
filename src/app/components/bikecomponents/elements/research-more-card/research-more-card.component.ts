import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research-more-card',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './research-more-card.component.html'
})
export class ResearchMoreCardComponent {
  @Input() links: string[] = [];
}

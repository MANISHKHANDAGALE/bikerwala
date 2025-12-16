import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../card/card.component';


@Component({
  selector: 'app-showroom-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './showroom-card.component.html'
})
export class ShowroomCardComponent {
  @Input() name!: string;
  @Input() address!: string;
}

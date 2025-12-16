import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() tailwindClass: string = ''

  @Output() onClick = new EventEmitter<void>()
}

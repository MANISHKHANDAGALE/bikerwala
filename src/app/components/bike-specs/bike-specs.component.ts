import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-specs',
  standalone: true,
  imports :[CommonModule],
  templateUrl: './bike-specs.component.html'
})
export class BikeSpecsComponent {
  @Input() specs!: string[];
}

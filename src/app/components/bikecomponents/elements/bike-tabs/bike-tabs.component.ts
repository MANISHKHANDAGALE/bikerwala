import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bike-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bike-tabs.component.html'
})
export class BikeTabsComponent {
  tabs = ['Bike Models', 'Top Comparisons', 'Images', 'Reviews', 'News'];
  activeTab = 'Bike Models';

  setActive(tab: string) {
    this.activeTab = tab;
  }
}

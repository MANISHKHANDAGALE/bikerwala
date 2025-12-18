import { Component } from '@angular/core';
import { FeatureBikeComponent } from "../feature-bike/feature-bike.component";
import { OfferSectionComponent } from "../offer-section/offer-section.component";
import { BrowseBikeComponent } from '../browse-bike/browse-bike.component';

@Component({
  selector: 'app-explorer',
  imports: [FeatureBikeComponent, OfferSectionComponent, BrowseBikeComponent],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.css'
})
export class ExplorerComponent {

}

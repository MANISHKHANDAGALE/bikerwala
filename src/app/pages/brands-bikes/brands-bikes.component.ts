import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodcuts, productsList } from '../../data/data';

@Component({
  selector: 'app-brands-bikes',
  imports: [],
  templateUrl: './brands-bikes.component.html',
  styleUrl: './brands-bikes.component.css'
})
export class BrandsBikesComponent {
  brandId!: string;
  brandBike!: string;

  bikeData: Prodcuts[] = productsList;
  bikeInfo?: Prodcuts;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.brandId = params.get('brandId')!;
      this.brandBike = params.get('brandbike')!;

      this.getBikeData();
    });
  }

  getBikeData() {
    this.bikeInfo = this.bikeData.find(
      bike =>
        bike.brand?.toLowerCase() === this.brandId.toLowerCase() &&
        bike.id === this.brandBike
    );
    console.log(this.bikeInfo)
  }

  get fullStars(): number {
    return Math.floor(Number(this.bikeInfo?.rating ?? 0));
  }

  get hasHalfStar(): boolean {
    const rating = Number(this.bikeInfo?.rating ?? 0);
    return rating % 1 >= 0.5;
  }

  get emptyStars(): number {
    return 5 - this.fullStars - (this.hasHalfStar ? 1 : 0);
  }
}

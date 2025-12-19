import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ChevronRight,
  CircleAlert,
  Image,
  LucideAngularModule,
  Star,
  StarHalf
} from 'lucide-angular';

import { Prodcuts } from '../../data/data';
import { Allbike, allbikeslist } from '../../data/all_bikes'; // <-- your Allbike object

@Component({
  selector: 'app-brand-bike',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './brand-bike.component.html',
  styleUrl: './brand-bike.component.css'
})
export default class BrandBikeComponent implements OnInit {

  /* ---------------- UI STATE ---------------- */

  categories: string[] = [
    'overview',
    'price',
    'expert opinion',
    'similiar cruiser biker',
    'colours',
    'mileages',
    'specs & features',
    'user reviews',
    'more'
  ];

  selectedCategory: string = 'overview';

  /* ---------------- ICONS ---------------- */

  rightArrowIcon = ChevronRight;
  informationIcon = CircleAlert;
  imageIcon = Image;
  starIcon = Star;
  halfStarIcon = StarHalf

  /* ---------------- ROUTE PARAMS ---------------- */

  brandId!: string;      // ex: royal-enfield
  brandbike!: string;    // ex: royal-enfield-classic-350

  /* ---------------- DATA ---------------- */

  brandData!: Allbike[keyof Allbike];
  bikeDetails!: Prodcuts | undefined;

  /* ---------------- ROUTER ---------------- */

  private route = inject(ActivatedRoute);

  /* ---------------- LIFECYCLE ---------------- */

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.brandId = params.get('brandId')!;
      this.brandbike = params.get('brandbike')!;

      this.resolveBikeData();
    });
  }

  /* ---------------- METHODS ---------------- */

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
  }

  private resolveBikeData(): void {
    const brandKey = this.normalizeBrandKey(this.brandId);
    console.log("brandkey", brandKey)

    this.brandData = allbikeslist[brandKey];
    console.log(this.brandData)

    if (!this.brandData) {
      console.error('❌ Brand not found:', brandKey);
      return;
    }

    this.bikeDetails = this.brandData.bikes.find(
      bike => bike.title === this.brandbike
    );

    if (!this.bikeDetails) {
      console.error('❌ Bike not found:', this.brandbike);
      return;
    }

    // Debug (remove in production)
    console.log('✅ Brand:', this.brandData);
    console.log('✅ Bike:', this.bikeDetails);
  }

  //star color logic
  rating = this.bikeDetails?.rating; // ← coming from data (bikeDetails?.rating)

  parseRating(rating: string | null | undefined): number {
    const value = Number(rating);
    return isNaN(value) ? 0 : value;
  }
  getStars(rating: number): ('full' | 'half' | 'empty')[] {
    const stars: ('full' | 'half' | 'empty')[] = [];

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }

    if (hasHalfStar) {
      stars.push('half');
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push('empty');
    }

    return stars;
  }



  private normalizeBrandKey(brandId: string): keyof Allbike {
    return brandId.trim().replace(/\s+/g, '').toLowerCase() as keyof Allbike;
  }
}

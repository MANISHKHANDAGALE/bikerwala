import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { BIKE_SEARCH_DATA } from '../../dummy-data';

@Component({
  selector: 'app-browse-bike',
  imports: [UpperCasePipe, NgClass],
  templateUrl: './browse-bike.component.html',
  styleUrl: './browse-bike.component.css'
})
export class BrowseBikeComponent {
  categories = ["brand", "budget","displacement", "bodystyle"]

  selectedCategory = "brand"

  onCategorySelect(category: string){
     this.selectedCategory = category;
     console.log(this.selectedCategory)
  }

  bodystyle = [
    {
      id:1,
      title: "Sports Bike",
      imageUrl: "bodystyle_svg/sports.svg"
    },
    {
      id:2,
      title: "Scooter",
      imageUrl: "bodystyle_svg/scooters.svg"
    },
    {
      id:3,
      title: "Cruiser",
      imageUrl: "bodystyle_svg/cruiser.svg"
    },
    {
      id:4,
      title: "Commuter",
      imageUrl: "bodystyle_svg/commuter.svg"
    },
    {
      id:5,
      title: "Street Bike",
      imageUrl: "bodystyle_svg/street-bikes.svg"
    },
    {
      id:6,
      title: "Super Bike",
      imageUrl: "bodystyle_svg/super-bikes.svg"
    },
    {
      id:7,
      title: "Cafe Bike",
      imageUrl: "bodystyle_svg/cafe-racer.svg"
    },
    {
      id:8,
      title: "Advebture Bike",
      imageUrl: "bodystyle_svg/adventure.svg"
    },
    {
      id:9,
      title: "Scramble",
      imageUrl: "bodystyle_svg/scrambler.svg"
    },
    {
      id:10,
      title: "Moped",
      imageUrl: "bodystyle_svg/moped.svg"
    },
    {
      id:11,
      title: "Touren Bike",
      imageUrl: "bodystyle_svg/tourer.svg"
    },
    {
      id:12,
      title: "Maxi Scooter",
      imageUrl: "bodystyle_svg/maxi-scooters.svg"
    },
  ]

  displacements = [
    {
      id: 1,
      cc: "Upto 100"
    },
    {
      id: 2,
      cc: "100-110"
    },
    {
      id: 3,
      cc: "110-125"
    },
    {
      id: 4,
      cc: "125-150"
    },
    {
      id: 5,
      cc: "150-200"
    },
    {
      id: 6,
      cc: "200-250"
    },
    {
      id: 7,
      cc: "250-500"
    },
    {
      id: 8,
      cc: "Above 500"
    },
  
  ]

  prices = [
    {
      id: 1,
      price: "Under ₹50000"
    },
    {
      id: 2,
      price: "Under ₹60000"
    },
    {
      id: 3,
      price: "Under ₹70000"
    },
    {
      id: 4,
      price: "Under ₹80000"
    },
    {
      id: 5,
      price: "Under ₹1 Lakh"
    },
    {
      id: 6,
      price: "Under ₹1.5 Lakh"
    },
    {
      id: 7,
      price: "Under ₹2 Lakh"
    },
    {
      id: 8,
      price: "Above 2 Lakh"
    },
  ]
}

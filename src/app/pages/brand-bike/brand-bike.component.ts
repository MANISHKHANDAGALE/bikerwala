import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChevronRight, CircleAlert, Image, LucideAngularModule, Star } from "lucide-angular"

@Component({
  selector: 'app-brand-bike',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './brand-bike.component.html',
  styleUrl: './brand-bike.component.css'
})
export default class BrandBikeComponent {
  categories = ["overview", "price", "expert opinion", "similiar cruiser biker", "colours", "mileages", "specs & features", "user reviews", "more"]

  selectedCategory: string = 'overview';

  rightArrowIcon = ChevronRight
  informationIcon = CircleAlert
  imageIcon = Image
  starIcon = Star

  onCategorySelect(category: string) {
    this.selectedCategory = category;
  }
}

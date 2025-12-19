import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Allbike, allbikeslist } from '../../../data/all_bikes';
import { ActivatedRoute } from '@angular/router';
import { Prodcuts } from '../../../data/data';
import { BikedetailTableComponent } from "../bikedetail-table/bikedetail-table.component";

@Component({
  selector: 'app-overview-card',
  imports: [CommonModule, BikedetailTableComponent],
  standalone: true,
  templateUrl: './overview-bike.component.html',
  styleUrls: ['./overview-bike.component.css']
})
export class OverviewCardComponent implements OnInit {

  // existing variables
  products: Allbike = allbikeslist;

  brand : any = {};
  brandId = '';
  brandslug = '';

  constructor(private route: ActivatedRoute) {
    // console.log(this.products);
  }

  // ngOnInit() {
  //   this.route.params.subscribe(params => {

  //     // const brandSlugParam = params['brandSlug']; // royalenfield-bikes
  //     const bikeSlug = params['bikeSlug'];   
  //     console.log( bikeSlug);     // re-classic-350

  //     if (!bikeSlug) return;

  //     // this.brandslug = bikeSlug;

  //     // const brandKey = brandSlugParam.replace('bikes', '');

      
  //     // this.brand = allbikeslist.find((product:any) =>
  //     //   product.slug === bikeSlug &&
  //     //   product.brand?.toLowerCase().replace(' ', '') === brandKey
  //     // );
  //   });
  // }
  ngOnInit() {
  this.route.params.subscribe(params => {
    console.log('All params 👉', params);
    this.brandId = params['brandId'];
    this.brandslug = params['brandbike'];
    console.log('Bike Slug 👉', this.brand, this.brandslug);
    if (!this.brand || !this.brandslug) {
      console.log('❌ bikeSlug not found');
      return;
    }
  });
  this.brand = allbikeslist.royalenfield.bikes.filter((bike: any) => bike.slug === this.brandslug);
  console.log('✅ Bike found:', this.brand);
  
}

}
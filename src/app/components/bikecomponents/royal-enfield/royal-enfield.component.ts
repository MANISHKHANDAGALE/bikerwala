import { Component, inject, OnInit } from '@angular/core';
import { BikeCardComponent } from '../../bike-card/bike-card.component';
import { CommonModule } from '@angular/common';
import { BikeFiltersComponent } from "../elements/bike-filters/bike-filters.component";
import { BikeTabsComponent } from "../elements/bike-tabs/bike-tabs.component";
import { ShowroomCardComponent } from "../elements/showroom-card/showroom-card.component";
import { BrandSimilarCardComponent } from "../elements/brand-similar-card/brand-similar-card.component";
import { ResearchMoreCardComponent } from "../elements/research-more-card/research-more-card.component";
import { FooterComponent } from "../../footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { Prodcuts } from '../../../data/data';
import { getAllBikesFlat } from '../../../utils/bike.utils';

@Component({
  selector: 'app-royal-enfield',
  imports: [BikeCardComponent, CommonModule, BikeFiltersComponent, BikeTabsComponent, ShowroomCardComponent, BrandSimilarCardComponent, ResearchMoreCardComponent, FooterComponent],
  templateUrl: './royal-enfield.component.html',
  styleUrl: './royal-enfield.component.css'
})
export default class RoyalEnfieldComponent implements OnInit {
 brand:string|null=''
 bikes:Prodcuts[] = []
 route = inject(ActivatedRoute)
 ngOnInit() {
   this.route.paramMap.subscribe((param:any)=>{
    this.brand = param.get('brandId')
    console.log(this.brand)
   })
   this.bikes = getAllBikesFlat().filter((bikebrand)=> bikebrand.brand?.toLowerCase() === this.brand?.toLowerCase() )
   console.log(this.bikes)
 }

//   bikes = [
//   {
//     image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/183389/classic-350-right-side-view-69.png?isig=0&q=80',
//     name: 'Royal Enfield Classic 350',
//     price: '₹2,27,931',
//     rating: 4.7,
//     reviews: 2568,
//     specs: ['349cc', '20.2 bhp', '195 kg'],
//     location: 'Mumbai'
//   },
//   {
//     image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/201293/hunter-350-right-side-view-13.png?isig=0&q=80',
//     name: 'Royal Enfield Hunter 350',
//     price: '₹1,77,605',
//     rating: 4.7,
//     reviews: 1998,
//     specs: ['349cc', '20.2 bhp', '181 kg'],
//     location: 'Mumbai'
//   },
//   {
//     image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/210213/meteor-350-right-side-view-9.png?isig=0&q=80',
//     name: 'Royal Enfield Classic 350',
//     price: '₹2,27,931',
//     rating: 4.7,
//     reviews: 2568,
//     specs: ['349cc', '20.2 bhp', '195 kg'],
//     location: 'Mumbai'
//   },
//   {
//     image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/138829/guerrilla-450-right-side-view-5.png?isig=0&q=80',
//     name: 'Royal Enfield Hunter 350',
//     price: '₹1,77,605',
//     rating: 4.7,
//     reviews: 1998,
//     specs: ['349cc', '20.2 bhp', '181 kg'],
//     location: 'Mumbai'
//   },
//   {
//     image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/49656/continental-gt-right-side-view-12.png?isig=0&q=80',
//     name: 'Royal Enfield Classic 350',
//     price: '₹2,27,931',
//     rating: 4.7,
//     reviews: 2568,
//     specs: ['349cc', '20.2 bhp', '195 kg'],
//     location: 'Mumbai'
//   },
//   {
//     image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/127499/bullet-right-side-view-14.png?isig=0&q=80',
//     name: 'Royal Enfield Hunter 350',
//     price: '₹1,77,605',
//     rating: 4.7,
//     reviews: 1998,
//     specs: ['349cc', '20.2 bhp', '181 kg'],
//     location: 'Mumbai'
//   },
//   {
//     image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/110431/himalayan-right-side-view-7.png?isig=0&q=80',
//     name: 'Royal Enfield Classic 350',
//     price: '₹2,27,931',
//     rating: 4.7,
//     reviews: 2568,
//     specs: ['349cc', '20.2 bhp', '195 kg'],
//     location: 'Mumbai'
//   },
//   {
//     image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/108885/super-meteor-750-right-side-view-6.png?isig=0&q=80',
//     name: 'Royal Enfield Hunter 350',
//     price: '₹1,77,605',
//     rating: 4.7,
//     reviews: 1998,
//     specs: ['349cc', '20.2 bhp', '181 kg'],
//     location: 'Mumbai'
//   },
//   {
//     image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/192235/scram-440-right-side-view-4.png?isig=0&q=80',
//     name: 'Royal Enfield Classic 350',
//     price: '₹2,27,931',
//     rating: 4.7,
//     reviews: 2568,
//     specs: ['349cc', '20.2 bhp', '195 kg'],
//     location: 'Mumbai'
//   },
//   {
//     image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/49657/interceptor-right-side-view-14.png?isig=0&q=80',
//     name: 'Royal Enfield Hunter 350',
//     price: '₹1,77,605',
//     rating: 4.7,
//     reviews: 1998,
//     specs: ['349cc', '20.2 bhp', '181 kg'],
//     location: 'Mumbai'
//   }
// ];

showrooms = [
  {
    name: 'Synergy Auto',
    address:
      'Ground Floor, Andheri Ghatkopar Link road, Beside Hotel Grand Peninsula, Mumbai - 400072'
  },
  {
    name: 'Voyage Motors',
    address:
      'Shop No.1, Sambhav Darshan, Opposite Poisar Masjid, S.V.Road, Mumbai - 400067'
  },
  {
    name: 'Ishna Wheels',
    address:
      'No 266/2116, New Link Road, Mumbai - 400104'
  }
];
similarBrands = [
  { name: 'Yamaha', logo: 'https://imgd.aeplcdn.com/0X0/bw/makes/yamaha20200508193220.jpg?q=80', bikes: 16 },
  { name: 'KTM', logo: 'https://imgd.aeplcdn.com/0X0/bw/makes/ktm20200518163508.jpg?q=80', bikes: 20 },
  { name: 'Jawa', logo: 'https://imgd.aeplcdn.com/0X0/bw/makes/jawa20200508192940.jpg?q=80', bikes: 5 },
  { name: 'Keeway', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/115/brands/logos/keeway1652859658203.jpg?v=1652859658281&q=80', bikes: 8 },
  { name: 'Husqvarna', logo: 'https://imgd.aeplcdn.com/0X0/bw/makes/husqvarna20200508192901.jpg?q=80', bikes: 2 },
  { name: 'TVS', logo: 'https://imgd.aeplcdn.com/0X0/bw/makes/tvs20200508193203.jpg?q=80', bikes: 22 }
];

researchLinks = [
  'Royal Enfield Service Centers',
  'Top 10 Bikes'
];


}

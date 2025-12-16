import { Component } from '@angular/core';
import { BikeCardComponent } from '../../bike-card/bike-card.component';
import { CommonModule } from '@angular/common';
import { BikeFiltersComponent } from "../elements/bike-filters/bike-filters.component";
import { BikeTabsComponent } from "../elements/bike-tabs/bike-tabs.component";
import { ShowroomCardComponent } from "../elements/showroom-card/showroom-card.component";
import { BrandSimilarCardComponent } from "../elements/brand-similar-card/brand-similar-card.component";
import { ResearchMoreCardComponent } from "../elements/research-more-card/research-more-card.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-royal-enfield',
  imports: [BikeCardComponent, CommonModule, BikeFiltersComponent, BikeTabsComponent, ShowroomCardComponent, BrandSimilarCardComponent, ResearchMoreCardComponent, FooterComponent],
  templateUrl: './royal-enfield.component.html',
  styleUrl: './royal-enfield.component.css'
})
export class RoyalEnfieldComponent {

  bikes = [
  {
    image: 'https://storage.googleapis.com/tvsbrandpage/bikewale%20assets/Pages/brandpageData/royalEnfield/classic-350.png',
    name: 'Royal Enfield Classic 350',
    price: '₹2,27,931',
    rating: 4.7,
    reviews: 2568,
    specs: ['349cc', '20.2 bhp', '195 kg'],
    location: 'Mumbai'
  },
  {
    image: 'https://storage.googleapis.com/tvsbrandpage/bikewale%20assets/Pages/brandpageData/royalEnfield/hunter-350.png',
    name: 'Royal Enfield Hunter 350',
    price: '₹1,77,605',
    rating: 4.7,
    reviews: 1998,
    specs: ['349cc', '20.2 bhp', '181 kg'],
    location: 'Mumbai'
  },
  {
    image: 'https://storage.googleapis.com/tvsbrandpage/bikewale%20assets/Pages/brandpageData/royalEnfield/classic-350.png',
    name: 'Royal Enfield Classic 350',
    price: '₹2,27,931',
    rating: 4.7,
    reviews: 2568,
    specs: ['349cc', '20.2 bhp', '195 kg'],
    location: 'Mumbai'
  },
  {
    image: 'https://storage.googleapis.com/tvsbrandpage/bikewale%20assets/Pages/brandpageData/royalEnfield/hunter-350.png',
    name: 'Royal Enfield Hunter 350',
    price: '₹1,77,605',
    rating: 4.7,
    reviews: 1998,
    specs: ['349cc', '20.2 bhp', '181 kg'],
    location: 'Mumbai'
  },
  {
    image: 'https://storage.googleapis.com/tvsbrandpage/bikewale%20assets/Pages/brandpageData/royalEnfield/classic-350.png',
    name: 'Royal Enfield Classic 350',
    price: '₹2,27,931',
    rating: 4.7,
    reviews: 2568,
    specs: ['349cc', '20.2 bhp', '195 kg'],
    location: 'Mumbai'
  },
  {
    image: 'https://storage.googleapis.com/tvsbrandpage/bikewale%20assets/Pages/brandpageData/royalEnfield/hunter-350.png',
    name: 'Royal Enfield Hunter 350',
    price: '₹1,77,605',
    rating: 4.7,
    reviews: 1998,
    specs: ['349cc', '20.2 bhp', '181 kg'],
    location: 'Mumbai'
  },
  {
    image: 'https://storage.googleapis.com/tvsbrandpage/bikewale%20assets/Pages/brandpageData/royalEnfield/classic-350.png',
    name: 'Royal Enfield Classic 350',
    price: '₹2,27,931',
    rating: 4.7,
    reviews: 2568,
    specs: ['349cc', '20.2 bhp', '195 kg'],
    location: 'Mumbai'
  },
  {
    image: 'https://storage.googleapis.com/tvsbrandpage/bikewale%20assets/Pages/brandpageData/royalEnfield/hunter-350.png',
    name: 'Royal Enfield Hunter 350',
    price: '₹1,77,605',
    rating: 4.7,
    reviews: 1998,
    specs: ['349cc', '20.2 bhp', '181 kg'],
    location: 'Mumbai'
  },
  {
    image: 'https://storage.googleapis.com/tvsbrandpage/bikewale%20assets/Pages/brandpageData/royalEnfield/classic-350.png',
    name: 'Royal Enfield Classic 350',
    price: '₹2,27,931',
    rating: 4.7,
    reviews: 2568,
    specs: ['349cc', '20.2 bhp', '195 kg'],
    location: 'Mumbai'
  },
  {
    image: 'https://storage.googleapis.com/tvsbrandpage/bikewale%20assets/Pages/brandpageData/royalEnfield/hunter-350.png',
    name: 'Royal Enfield Hunter 350',
    price: '₹1,77,605',
    rating: 4.7,
    reviews: 1998,
    specs: ['349cc', '20.2 bhp', '181 kg'],
    location: 'Mumbai'
  }
];

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
  { name: 'Yamaha', logo: 'assets/brands/yamaha.png', bikes: 16 },
  { name: 'KTM', logo: 'assets/brands/ktm.png', bikes: 20 },
  { name: 'Jawa', logo: 'assets/brands/jawa.png', bikes: 5 },
  { name: 'Keeway', logo: 'assets/brands/keeway.png', bikes: 8 },
  { name: 'Husqvarna', logo: 'assets/brands/husqvarna.png', bikes: 2 },
  { name: 'TVS', logo: 'assets/brands/tvs.png', bikes: 22 }
];

researchLinks = [
  'Royal Enfield Service Centers',
  'Top 10 Bikes'
];


}

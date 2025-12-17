import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
//import { ExplorerComponent } from './components/explorer/explorer.component';
import { BikeBrandDetailsComponent } from './pages/bike-brand-details/bike-brand-details.component';
import { BikeBrandListComponent } from './pages/bike-brand-list/bike-brand-list.component';
import { authGuard } from './guards/auth.guard';
import { RoyalEnfieldComponent } from './components/bikecomponents/royal-enfield/royal-enfield.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path:'signIn',
    loadComponent:() => import('./components/sign-in/sign-in.component')
  },
  {
    path:'signUp',
    loadComponent:() => import('./components/sign-up/sign-up.component')
  },
  //  {
  //   path: 'bike-brand',
  //   component: BikeBrandListComponent,
  //   data: { title: 'Bike Brands' }
  // },
  // 🔐 Protected Bike Brand Details
  // {
  //   path: 'bike-brand/:bikename',
  //   component: BikeBrandDetailsComponent,
  //   canActivate: [authGuard],
  //   data: { title: 'Bike Brand Details' }
  // },
  {
    path: '**',
    redirectTo: ''
  }

];

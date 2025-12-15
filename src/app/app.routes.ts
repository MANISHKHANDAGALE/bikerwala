import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExplorerComponent } from './components/explorer/explorer.component';

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
  // // 🔐 Protected Bike Brand Details
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

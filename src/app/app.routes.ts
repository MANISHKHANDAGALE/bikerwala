import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import SignUpComponent from './components/sign-up/sign-up.component';
import SignInComponent from './components/sign-in/sign-in.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path:'signIn',
    component:SignInComponent,
  },
  {
    path:'signUp',
    component:SignUpComponent,
  },
  {
    path: 'brand/:brandId/:brandbike',
    loadComponent: () =>
      import('./pages/brands-bikes/brands-bikes.component')
        .then(m => m.BrandsBikesComponent),
    // canActivate: [authGuard]
  },
   {
    path:'brand/bikebrand',
    loadComponent:()=> import('./components/bikecomponents/royal-enfield/royal-enfield.component')
   },
  {
    path: 'brand/:brandId',
    loadComponent: () =>
      import('./pages/brands/brands.component')
        .then(m => m.BrandsComponent),
    // canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }

];

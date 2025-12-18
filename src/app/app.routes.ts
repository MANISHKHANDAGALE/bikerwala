import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import SignUpComponent from './components/sign-up/sign-up.component';
import SignInComponent from './components/sign-in/sign-in.component';
import RoyalEnfieldComponent from './components/bikecomponents/royal-enfield/royal-enfield.component';


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
    path: ':brandId/:brandbike',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/brand-bike/brand-bike.component')
        .then(m => m.BrandBikeComponent),

      },
      {
        path:"royal",
        component:RoyalEnfieldComponent
      },
      {
    path:'bikebrand',
    canActivate: [authGuard],
    loadComponent:()=> import('./components/bikecomponents/royal-enfield/royal-enfield.component')
   },
  {
    path: ':brandId',
    canActivate: [authGuard],
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

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
  // {
  //   path: '/:brandId/:brandbike',
  //   loadComponent: () =>
  //     import('./pages/brand-bike/brand-bike.component')
  //       .then(m => m.BrandBikeComponent),
  //   // canActivate: [authGuard]
  // },
  // {
  //   path: '/:brandId',
  //   loadComponent: () =>
  //     import('./pages/brands/brands.component')
  //       .then(m => m.BrandsComponent),
  //   // canActivate: [authGuard]
  // },
  {
    path: '**',
    redirectTo: ''
  }

];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';


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
  {
    path: 'brand/:brandId/:brandbike',
    loadComponent: () =>
      import('./pages/brands-bikes/brands-bikes.component')
        .then(m => m.BrandsBikesComponent),
    // canActivate: [authGuard]
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

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
import { ToasterService } from '../services/toaster.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toaster = inject(ToasterService);

  // return authService.isAuthenticated().pipe(
  //   map(isAuth => {
  //     if (isAuth) return true;

  //     alert('Please signin or signup first');
  //     router.navigate(['/signin']);
  //     return false;
  //   })
  // );
  if(authService.isLoggedIn()){
    return true;
  }
  toaster.error('Please Login');
  authService.removeToken();
  router.navigate(['/signIn']);
  return false;
};


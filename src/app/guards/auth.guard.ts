import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // return authService.isAuthenticated().pipe(
  //   map(isAuth => {
  //     if (isAuth) return true;

<<<<<<< HEAD
  //     alert('Please signin or signup first');
  //     router.navigate(['/signin']);
  //     return false;
  //   })
  // );
  if(authService.isLoggedIn()){
    return true;
  }
  authService.removeToken();
  router.navigate(['/signIn']);
  return false;
};

=======
      alert('Please signin or signup first');
      router.navigate(['/signin']);
      return false;
    })
  );
};
>>>>>>> 5925825c85312314bcbb8315b8d5d2f779d2984e

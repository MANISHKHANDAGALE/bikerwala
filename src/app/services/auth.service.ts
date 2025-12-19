import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ToasterService } from './toaster.service';

export interface LoginResponse {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toast = inject(ToasterService)
  token = signal<string>(this.getToken() ?? '');
  private API = 'https://auth-backend-liart.vercel.app';

  constructor(private http: HttpClient) {}
  // token handling
  setToken(token:string){
  localStorage.setItem('token',token)
  }
  getToken():null|string{
   return localStorage.getItem('token')
  }
  removeToken(){
    localStorage.removeItem('token')
    // this.toast.success("User Logout")
  }
  isLoggedIn():boolean{
    return !!this.getToken();
  }
  // auth logic
  signin(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.API}/auth/signin`, {password,email}, {
      withCredentials: true
    }).pipe(
      tap(res => {
        if(res?.token){
          this.setToken(res.token)
          this.token.set(res.token)
          console.log("token from api",res.token)
        }
      })
    )
  }

  signup(data: any) {
    return this.http.post(`${this.API}/auth/signup`, data, {
      withCredentials: true
    });
  }

  logout() {
    return this.http.post(`${this.API}/auth/logout`, {}, {
      withCredentials: true
    });
  }
  login():boolean{
    const localToken = this.getToken()
   console.log("token from api",this.token)
   console.log("token from localstorage",localToken)
   console.log(this.token() === localToken)
   if(this.token() === localToken){
    return !!this.getToken();
   }
   return false
  }
  // 🔐 CHECK LOGIN (COOKIE → BACKEND)
  isAuthenticated(): Observable<boolean> {
    return this.http.get<any>(`${this.API}/auth/me`, {
      withCredentials: true
    }).pipe(
      map(res => res.authenticated === true),
      catchError(()=> of(false))
    );
  }
}

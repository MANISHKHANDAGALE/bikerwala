import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = 'https://auth-backend-liart.vercel.app';

  constructor(private http: HttpClient) {}

  signin(data: any) {
    return this.http.post(`${this.API}/auth/signin`, data, {
      withCredentials: true
    });
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

  // 🔐 CHECK LOGIN (COOKIE → BACKEND)
  isAuthenticated(): Observable<boolean> {
    return this.http.get<any>(`${this.API}/auth/me`, {
      withCredentials: true
    }).pipe(
      map(res => res.authenticated === true)
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface BikeInfo {
  assetsname: string,
  image: string
  price: number
}

@Injectable({
  providedIn: 'root'
})

export class BikeService {

   url = "https://bikewala-api.onrender.com/api/assets"

  constructor(private http: HttpClient) { }

  getBike(): Observable<BikeInfo[]> {
    return this.http.get<BikeInfo[]>(this.url)
  }
}

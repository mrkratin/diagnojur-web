import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { City, Page, Response } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private readonly path = 'cities';

  constructor(private http: HttpClient) {}

  findByProvinceId(id: string): Observable<Response<City[]>> {
    return this.http.get<Response<City[]>>(environment.urlApi + `${this.path}/province/${id}`);
  }

  findCounty(county: string): Observable<Response<Page<City>>> {
    return this.http.get<Response<Page<City>>>(environment.urlApi + `${this.path}?city=${county}`);
  }
}

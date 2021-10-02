import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Province, Response } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private readonly path = 'provinces';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Response<Province[]>> {
    return this.http.get<Response<Province[]>>(environment.urlApi + `${this.path}`);
  }
}

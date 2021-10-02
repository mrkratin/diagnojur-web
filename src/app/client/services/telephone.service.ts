import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Telephone, Response } from '../../shared';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {
  private readonly path = 'telephones';
  constructor(private readonly http: HttpClient) {}

  findById(id: number): Observable<Response<Telephone>> {
    const url = `${environment.urlApi}${this.path}/${id}`;
    return this.http.get<Response<Telephone>>(url);
  }

  save(telephone: Telephone): Observable<Response<Telephone>> {
    const url = `${environment.urlApi}${this.path}`;
    return this.http.post<Response<Telephone>>(url, telephone);
  }

  update(telephone: Telephone): Observable<Response<any>> {
    const url = `${environment.urlApi}${this.path}/${telephone.id}`;
    return this.http.put<Response<any>>(url, telephone);
  }

  findAll(): Observable<Response<Telephone[]>> {
    const url = `${environment.urlApi}${this.path}`;
    return this.http.get<Response<Telephone[]>>(url);
  }
}

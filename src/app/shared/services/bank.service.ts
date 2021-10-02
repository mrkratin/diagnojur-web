import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bank, Page, Response } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private readonly path = 'banks';

  constructor(private http: HttpClient) {}

  findById(id: number | string): Observable<Response<Bank>> {
    return this.http.get<Response<Bank>>(environment.urlApi + this.path + `/${id}`);
  }

  findByDescription(page: number, size: number, description: string): Observable<Response<Page<Bank>>> {
    return this.http.get<Response<Page<Bank>>>(
      environment.urlApi + `${this.path}?page=${page}&size=${size}&description=${description}`
    );
  }
}

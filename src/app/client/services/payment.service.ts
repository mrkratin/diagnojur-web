import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direction, Page, Response } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { Payment } from '../models';
import { OrderBy } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private readonly path = 'payments';

  constructor(private http: HttpClient) {}

  findById(id: number | string): Observable<Response<Page<Payment>>> {
    return this.http.get<Response<any>>(environment.urlApi + this.path + `/${id}`);
  }

  findByPerson(
    page: number,
    size: number,
    orderBy: OrderBy = 'creationDate',
    direction: Direction = Direction.DESC,
    status: string = ''
  ): Observable<Response<any>> {
    const params = `page=${page}&size=${size}&orderBy=${orderBy}&direction=${direction}`;
    return this.http.get<Response<Page<Payment>>>(environment.urlApi + this.path + `?${params}`);
  }
}

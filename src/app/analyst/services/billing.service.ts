import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { Transfer, RequestWithdraw } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private readonly path = (id: number) => `analyst/${id}`;

  constructor(private http: HttpClient) {}

  findTransfers(id: number): Observable<Response<Transfer[]>> {
    const url = environment.urlApi + this.path(id) + '/transfers';

    return this.http.get<Response<Transfer[]>>(url);
  }

  findWithdrawRequests(id: number): Observable<Response<RequestWithdraw[]>> {
    const url = environment.urlApi + this.path(id) + '/withdraw-requests';

    return this.http.get<Response<RequestWithdraw[]>>(url);
  }
}

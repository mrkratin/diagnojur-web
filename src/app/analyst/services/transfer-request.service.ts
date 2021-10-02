import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Direction, Page, Response } from '../../shared/models';
import { TransferRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TransferRequestService {
  private readonly path: string = 'transfer-requests';

  constructor(private http: HttpClient) {}

  request(value: string | number): Observable<Response<TransferRequest>> {
    return this.http.post<Response<TransferRequest>>(`${environment.urlApi + this.path}?value=${value}`, undefined);
  }

  findPage(
    page: number,
    size: number,
    order: string = 'creationDate',
    direction: Direction = Direction.DESC,
    sdate?: string,
    sdate2?: string
  ): Observable<Response<Page<TransferRequest>>> {
    const url: string =
      environment.urlApi + this.path + `?page=${page}&size=${size}&order=${order}&direction=${direction}`;
    return sdate === undefined
      ? this.http.get<Response<Page<TransferRequest>>>(url)
      : this.http.get<Response<Page<TransferRequest>>>(url + `&sdate=${sdate}&sdate2=${sdate2}`);
  }
}

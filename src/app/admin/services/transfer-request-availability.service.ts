import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../shared/services';
import { Observable } from 'rxjs';
import { TransferRequestAvailability } from '../models';
import { environment } from '../../../environments/environment';
import { Direction, Page, Response } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class TransferRequestAvailabilityService {
  private readonly path: string = 'transfer-request-availabilities';

  constructor(private http: HttpClient, private token: TokenService) {}

  findById(id: number): Observable<Response<TransferRequestAvailability>> {
    const url: string = environment.urlApi + this.path + `/${id}`;
    return this.http.get<Response<TransferRequestAvailability>>(url);
  }

  findPage(
    page: number,
    size: number,
    order: string = 'creationDate',
    direction: Direction = Direction.DESC,
    status: string = 'PENDING'
  ): Observable<Response<Page<TransferRequestAvailability>>> {
    let url: string = environment.urlApi + this.path;
    url = url + `?page=${page}&size=${size}&order=${order}&direction=${direction}&status=${status}`;
    return this.http.get<Response<Page<TransferRequestAvailability>>>(url);
  }

  reserve(id: number): Observable<Response<any>> {
    const url: string = environment.urlApi + this.path + `/${id}`;
    return this.http.put<Response<any>>(url, undefined);
  }
}

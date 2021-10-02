import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direction, Page, Response } from '../../shared/models';
import { AnalystPending, SmallAnalyst } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalystService {
  private readonly path: string = 'analysts/';
  private readonly pathPending: string = this.path + 'pending';
  private readonly pathComplete: string = 'complete';
  private readonly pathPendingPage: string = this.pathPending + '/page';
  private readonly pathConfirmAnalyst: string = 'confirm';

  constructor(private http: HttpClient) {}

  findPending(
    page: number,
    size: number,
    orderBy: string,
    direction: Direction
  ): Observable<Response<Page<SmallAnalyst>>> {
    const url =
      environment.urlApi + `${this.pathPending}?page=${page}&size=${size}&orderBy=${orderBy}&direction=${direction}`;
    return this.http.get<Response<Page<SmallAnalyst>>>(url);
  }

  findPendingById(id: number): Observable<Response<AnalystPending>> {
    return this.http.get<Response<AnalystPending>>(environment.urlApi + `${this.path}${id}/${this.pathComplete}`);
  }

  confirmAnalyst(id: number): Observable<Response<boolean>> {
    return this.http.put<Response<boolean>>(
      environment.urlApi + `${this.path}${id}/${this.pathConfirmAnalyst}`,
      undefined
    );
  }
}

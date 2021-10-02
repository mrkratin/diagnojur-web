import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitationHistory } from '../models';
import { Response } from '../../shared/models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitationHistoryService {
  private readonly path = 'solicitation-histories';

  constructor(private http: HttpClient) {}

  findBySolicitation(solicitationId: number): Observable<Response<SolicitationHistory[]>> {
    return this.http.get<Response<SolicitationHistory[]>>(
      environment.urlApi + this.path + `/solicitation/${solicitationId}`
    );
  }
}

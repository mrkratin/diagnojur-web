import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SolicitationReplyPending } from '../models';
import { environment } from '../../../environments/environment';
import { TokenService } from '../../shared/services';
import { Response } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class SolicitationReplyService {
  private readonly path: string = 'solicitations-replies';

  constructor(private http: HttpClient, private token: TokenService) {}

  findPending(): Observable<Response<SolicitationReplyPending[]>> {
    const url = `${environment.urlApi + this.path}/pending`;
    return this.http.get<Response<SolicitationReplyPending[]>>(url);
  }
}

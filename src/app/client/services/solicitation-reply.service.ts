import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitationReply, SolicitationReplyCreate } from '../models';
import { Response } from '../../shared/models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitationReplyService {
  private readonly path: string = 'solicitations-replies';

  constructor(private http: HttpClient) {}

  solicitationReply(reply: SolicitationReplyCreate): Observable<Response<SolicitationReply>> {
    const url = `${environment.urlApi + this.path}`;
    return this.http.post<Response<SolicitationReply>>(url, reply);
  }
}

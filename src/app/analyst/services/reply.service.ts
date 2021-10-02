import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reply } from '../../client/models';
import { environment } from '../../../environments/environment';
import { AnswerReply } from '../models';
import { Response } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {
  private readonly path: string = 'replies';

  constructor(private http: HttpClient) {}

  create(reply: AnswerReply): Observable<Response<Reply>> {
    const url = `${environment.urlApi + this.path}`;
    return this.http.post<Response<Reply>>(url, reply);
  }
}

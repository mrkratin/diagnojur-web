import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../shared/services';
import { Observable } from 'rxjs';
import { ProcessEvent } from '../models/process-event';
import { Response } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { ProcessEventCreate } from '../models/process-event-create';

@Injectable({
  providedIn: 'root'
})
export class ProcessEventService {
  private readonly path: string = 'process-events/';

  constructor(private http: HttpClient, private token: TokenService) {}

  insert(processEvent: ProcessEventCreate): Observable<Response<ProcessEvent>> {
    const url: string = environment.urlApi + this.path;
    return this.http.post<Response<ProcessEvent>>(url, processEvent, { headers: this.token.getHeaders() });
  }

  update(processEvent: ProcessEvent): Observable<Response<ProcessEvent>> {
    const url: string = environment.urlApi + this.path + processEvent.id;
    return this.http.put<Response<ProcessEvent>>(url, processEvent, { headers: this.token.getHeaders() });
  }

  delete(id: number): Observable<any> {
    const url: string = environment.urlApi + this.path + id;
    return this.http.delete(url, { headers: this.token.getHeaders() });
  }
}

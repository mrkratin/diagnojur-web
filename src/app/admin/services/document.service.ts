import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../shared/models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private readonly path: string = 'documents';

  constructor(private http: HttpClient) {}

  approver(id: number): Observable<Response<any>> {
    return this.http.put<Response<any>>(environment.urlApi + `${this.path}/${id}/approve`, undefined);
  }

  disapprover(id: number, deniedType: string): Observable<Response<any>> {
    const url = environment.urlApi + `${this.path}/${id}/disapprove?deniedType=${deniedType}`;
    return this.http.put<Response<any>>(url, undefined);
  }
}

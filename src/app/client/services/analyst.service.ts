import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AnalystCreate } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AnalystService {
  private readonly path = 'analysts';

  constructor(private http: HttpClient) {}

  insert(analyst: AnalystCreate): Observable<any> {
    return this.http.post<any>(environment.urlApi + `${this.path}`, analyst);
  }

  me(): Observable<any> {
    return this.http.get<any>(environment.urlApi + `${this.path}/me`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direction, Page, Response } from '../../shared/models';
import { DiagnosisStatusEnum, DiagnosticPending, SmallDiagnosis } from '../models';
import { environment } from '../../../environments/environment';
import { Diagnostic } from '../models/diagnostic';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {
  private readonly path = 'diagnosis';

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<Response<Diagnostic>> {
    const url: string = environment.urlApi + `${this.path}/${id}`;
    return this.http.get<Response<Diagnostic>>(url);
  }

  findPending(): Observable<Response<DiagnosticPending>> {
    const url: string = environment.urlApi + `${this.path}/pending`;
    return this.http.get<Response<DiagnosticPending>>(url);
  }

  findPage(
    page: number = 0,
    size: number = 5,
    direction: Direction = Direction.DESC,
    status: DiagnosisStatusEnum
  ): Observable<Response<Page<SmallDiagnosis>>> {
    const url: string = environment.urlApi + `${this.path}?status=${status}&page=${page}&size=${size}`;
    return this.http.get<Response<Page<SmallDiagnosis>>>(url);
  }

  answer(id: number): Observable<Response<Diagnostic>> {
    const url = `${environment.urlApi + this.path}/${id}/finalize`;
    return this.http.put<Response<Diagnostic>>(url, undefined);
  }
}

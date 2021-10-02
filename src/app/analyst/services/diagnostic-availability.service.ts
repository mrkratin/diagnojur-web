import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../../shared/services';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DiagnosticPending } from '../models';
import { Response } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticAvailabilityService {
  private readonly path = 'diagnostic-availability';

  constructor(private http: HttpClient, private token: TokenService) {}

  nextDiagnosis(): Observable<Response<DiagnosticPending>> {
    const url: string = environment.urlApi + `${this.path}`;
    return this.http.post<Response<DiagnosticPending>>(url, undefined);
  }
}

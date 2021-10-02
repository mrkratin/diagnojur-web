import { Injectable } from '@angular/core';
import { Direction, Page, Response } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SmallSolicitation, Solicitation } from '../models';
import { SolicitationCreate } from '../models/solicitation-create';

@Injectable({
  providedIn: 'root'
})
export class SolicitationService {
  private readonly path = 'solicitations';
  private readonly pathDiagnosis = 'diagnosis';

  constructor(private http: HttpClient) {}

  create(solicitation: SolicitationCreate): Observable<Response<Solicitation>> {
    return this.http.post<Response<Solicitation>>(environment.urlApi + `${this.path}`, solicitation);
  }

  findById(id: string | number): Observable<Response<Solicitation>> {
    return this.http.get<Response<Solicitation>>(environment.urlApi + `${this.path}/${id}`);
  }

  findPage(
    page: number = 0,
    size: number = 5,
    direction: Direction = Direction.DESC,
    status?: string,
    processNumber?: string
  ): Observable<Response<Page<SmallSolicitation>>> {
    const fullPath = `${this.path}?page=${page}&size=${size}&direction=${direction}&status=${status}&process-number=${processNumber}`;
    const url: string = environment.urlApi + fullPath;
    return this.http.get<Response<Page<SmallSolicitation>>>(url);
  }

  /**
   *
   * @param value Solicitation, SmallSolicitation or Id of Diagnosis
   */
  download(value: Solicitation | SmallSolicitation | number | any): Observable<HttpResponse<Blob>> {
    let id;
    if (value.diagnosis) {
      id = value.diagnosis.id;
    } else if (value.diagnosisId) {
      id = value.diagnosisId;
    } else {
      id = value;
    }
    const url = `${environment.urlApi}${this.pathDiagnosis}/${id}/export`;
    return this.http.post(url, undefined, { observe: 'response', responseType: 'blob' });
  }
}

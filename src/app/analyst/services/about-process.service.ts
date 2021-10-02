import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutProcessCreate } from '../models';
import { ProceduralInformation, Response } from '../../shared/models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutProcessService {
  private readonly path: string = 'procedural-information';

  constructor(private http: HttpClient) {}

  findById(id: number | string): Observable<Response<ProceduralInformation>> {
    return this.http.get<Response<ProceduralInformation>>(environment.urlApi + `${this.path}/${id}`);
  }

  save(aboutProcess: AboutProcessCreate): Observable<Response<ProceduralInformation>> {
    return this.http.post<Response<ProceduralInformation>>(environment.urlApi + `${this.path}`, aboutProcess);
  }

  update(aboutProcess: ProceduralInformation): Observable<Response<ProceduralInformation>> {
    return this.http.put<Response<ProceduralInformation>>(
      environment.urlApi + `${this.path}/${aboutProcess.id}`,
      aboutProcess
    );
  }
}

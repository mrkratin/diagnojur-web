import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from '../models/part';
import { Response } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { PartCreate } from '../models/part-create';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private readonly path: string = 'parts/';

  constructor(private http: HttpClient) {}

  insert(part: PartCreate): Observable<Response<Part>> {
    const url: string = environment.urlApi + this.path;
    return this.http.post<Response<Part>>(url, part);
  }

  update(part: Part): Observable<Response<Part>> {
    const url: string = environment.urlApi + this.path + part.id;
    return this.http.put<Response<Part>>(url, part);
  }

  delete(id: number): Observable<any> {
    const url: string = environment.urlApi + this.path + id;
    return this.http.delete(url);
  }
}

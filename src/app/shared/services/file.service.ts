import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Response } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private readonly path: string = 'files';

  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<Response<string>> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<Response<string>>(environment.urlApi + `${this.path}`, formData);
  }

  pushFormDataToStorage(formData: FormData): Observable<Response<string>> {
    return this.http.post<Response<string>>(environment.urlApi + `${this.path}`, formData);
  }
}

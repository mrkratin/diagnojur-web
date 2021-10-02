import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person, Response } from '../models';
import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';
import { Profile } from '../../admin/models';
import { PersonUpdate } from '../../client/models';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private readonly path: string = 'persons';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  find(): Observable<Response<Person>> {
    return this.http.get<Response<Person>>(environment.urlApi + `${this.path}`);
  }

  findProfile(id: number): Observable<Response<Profile>> {
    const url: string = environment.urlApi + this.path + `/${id}/profile`;
    return this.http.get<Response<Profile>>(url);
  }

  update(person: PersonUpdate): Observable<Response<any>> {
    const url: string = environment.urlApi + this.path + `/${person.id}`;
    return this.http.put<Response<any>>(url, person);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direction, Page, Response } from '../../shared/models';
import { Profile, SmallPerson, UpdatePersonAdmin } from '../models';
import { environment } from '../../../environments/environment';
import { TokenService } from '../../shared/services';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private readonly path: string = 'persons';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  findByName(
    description: string,
    page: number,
    size: number,
    searchBy: string,
    orderBy: string = 'id',
    direction: Direction = Direction.DESC
  ): Observable<Response<Page<SmallPerson>>> {
    let url: string = environment.urlApi + this.path;
    url =
      url +
      `/search/${description}?page=${page}&size=${size}&searchBy=${searchBy}&orderBy=${orderBy}&direction=${direction}`;
    return this.http.get<Response<Page<SmallPerson>>>(url);
  }

  findProfile(id: number): Observable<Response<Profile>> {
    const url: string = environment.urlApi + this.path + `/${id}/profile`;
    return this.http.get<Response<Profile>>(url);
  }

  admin(id: number): Observable<Response<any>> {
    const url: string = environment.urlApi + `administrators/${id}`;
    return this.http.post<Response<any>>(url, undefined);
  }

  updatePerson(person: UpdatePersonAdmin): Observable<Response<any>> {
    const url: string = environment.urlApi + `persons/${person.id}/admin`;
    return this.http.put<Response<any>>(url, person);
  }
}

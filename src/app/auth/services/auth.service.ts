import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Person, Response, Token } from '../../shared';
import { CreatePerson, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly pathSingup = 'singup';
  private readonly pathSingin = 'singin';

  constructor(private http: HttpClient) {}

  singin(user: User): Observable<Response<Token>> {
    return this.http.post<Response<Token>>(environment.urlAuth + `${this.pathSingin}`, user);
  }

  singup(person: CreatePerson): Observable<Response<Person>> {
    return this.http.post<Response<Person>>(environment.urlAuth + `${this.pathSingup}`, person);
  }

  emailAvailability(email: string): Observable<Response<boolean>> {
    return this.http.get<Response<boolean>>(environment.urlAuth + `email-availability/${email}`);
  }

  generateToken(email: string): Observable<Response<boolean>> {
    return this.http.post<Response<boolean>>(environment.urlAuth + `generate-reset-token?email=${email}`, undefined);
  }

  resetPassword(id: number | string, token: string, password: string): Observable<Response<boolean>> {
    return this.http.post<Response<boolean>>(environment.urlAuth + 'reset-password', { id, token, password });
  }
}

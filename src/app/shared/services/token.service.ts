import { Injectable } from '@angular/core';
import { ProfileTypeEnum, Response, Token } from '../models';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(
    private readonly router: Router,
    private readonly http: HttpClient
  ) {}

  refresh() {
    if (this.isLogged()) {
      const sub = this.http
        .post<Response<Token>>(`${environment.urlAuth}refresh`, undefined)
        .subscribe(
          response => {
            if (this.inLocalStorage()) {
              this.saveInLocalStorage(response.data);
            } else {
              this.saveInSessionStorage(response.data);
            }
            sub.unsubscribe();
          },
          error => {
            sub.unsubscribe();
          }
        );
    }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  inLocalStorage(): boolean {
    return !!localStorage.getItem('token');
  }

  inSessionStorage(): boolean {
    return !!sessionStorage.getItem('token');
  }

  saveInLocalStorage(token: Token) {
    localStorage.setItem('prefix', token.prefix.toString());
    localStorage.setItem('token', token.token.toString());
  }

  saveInSessionStorage(token: Token) {
    sessionStorage.setItem('prefix', token.prefix.toString());
    sessionStorage.setItem('token', token.token.toString());
  }

  getToken(): Token | undefined {
    let token: Token;
    if (this.inLocalStorage()) {
      token = {
        prefix: localStorage.getItem('prefix'),
        token: localStorage.getItem('token')
      };
    } else if (this.inSessionStorage()) {
      token = {
        prefix: sessionStorage.getItem('prefix'),
        token: sessionStorage.getItem('token')
      };
    }
    return token;
  }

  getUser(): string {
    const body: string = this.getBody();
    const aux: string = body.split(':')[1];
    return aux.substring(1, aux.length - 11);
  }

  getId(): number {
    return JSON.parse(this.getBody()).id;
  }

  getRoles(): ProfileTypeEnum[] {
    const body: string = this.getBody();
    if (body) {
      const roles: ProfileTypeEnum[] = JSON.parse(body).roles;
      return roles;
    }
    return [];
  }

  isLogged(): boolean {
    return !!this.getToken();
  }

  /**
   * @deprecated Use {@link DjHttpInterceptor}
   */
  getHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set(
      'Authorization',
      this.getToken().prefix + ' ' + this.getToken().token
    );
    return httpHeaders;
  }

  isAnalyst(): boolean {
    if (this.getRoles()) {
      return this.getRoles().includes(ProfileTypeEnum.ROLE_ANALYST);
    }
    return false;
  }

  isAdmin(): boolean {
    if (this.getRoles()) {
      return this.getRoles().includes(ProfileTypeEnum.ROLE_ADMIN);
    }
    return false;
  }

  isRoot(): boolean {
    if (this.getRoles()) {
      return this.getRoles().includes(ProfileTypeEnum.ROLE_ROOT);
    }
    return false;
  }

  private getBody(): string {
    const jwtToken: Token = this.getToken();
    if (jwtToken) {
      const token: string = this.getToken().token;
      if (token) {
        const body: string = atob(token.split('.')[1]);
        return body;
      }
    }
    return;
  }
}

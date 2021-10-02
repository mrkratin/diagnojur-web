import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { TokenService } from '../shared/services';
import { StandardError, Token } from '../shared/models';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class DjHttpInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private message: NzMessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenService.isLogged() && !req.url.includes('viacep.com.br')) {
      const token: Token = this.tokenService.getToken();
      req = req.clone({ headers: req.headers.set('Authorization', `${token.prefix} ${token.token}`) });
    }

    // if (!req.headers.has('Content-Type')) {
    //   req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
    // }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (this.tokenService.isLogged()) {
            this.message.error('Sessão expirada. Faça login novamente.');
            this.tokenService.logout();
          } else {
            this.message.error('Usuário ou senha incorreta.');
          }
        } else if (error.status === 403) {
          this.message.error('Você não tem permissão para utilizar este recurso.');
        } else if (error.status === 500) {
          this.message.error('Ocorreu um erro interno no nosso servidor. Tente novamente mais tarde.');
        } else if (error.status === 400) {
          const e: StandardError[] = error.error.errors ? error.error.errors : [];
          this.message.error(`${e[0].message}`);
          // .onClose
          // .subscribe(() => this.message.info('Verifique os dados informados e tente novamente.')
          // );
        }
        return throwError(error);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Response, Wallet } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private readonly path: string = 'wallets';

  constructor(private http: HttpClient) {}

  findByPerson(): Observable<Response<Wallet>> {
    return this.http.get<Response<Wallet>>(environment.urlApi + `${this.path}`);
  }
}

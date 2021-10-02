import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankAccount, Response } from '../../shared/models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private path = 'bank-accounts';

  constructor(private http: HttpClient) {}

  findByPerson(): Observable<Response<BankAccount>> {
    const url = environment.urlApi + this.path;
    return this.http.get<Response<BankAccount>>(url);
  }
}

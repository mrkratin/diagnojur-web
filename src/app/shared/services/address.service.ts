import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address, Response } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private readonly path = 'addresses';

  constructor(private http: HttpClient) {}

  create(address: Address): Observable<Response<Address>> {
    return this.http.post<Response<Address>>(
      `${environment.urlApi}${this.path}`,
      address
    );
  }

  findByPerson(): Observable<Response<Address>> {
    return this.http.get<Response<Address>>(
      `${environment.urlApi}${this.path}`
    );
  }

  findByCep(cep: string): Observable<any> {
    return this.http.get<Observable<any>>(
      `https://viacep.com.br/ws/${cep}/json/`
    );
  }

  update(id: number | string, address: Address): Observable<Response<Address>> {
    return this.http.put<Response<Address>>(
      `${environment.urlApi}${this.path}/${id}`,
      address
    );
  }
}

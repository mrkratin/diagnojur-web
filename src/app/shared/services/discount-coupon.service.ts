import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direction, DiscountCoupon, DiscountCouponCreate, Page, Response } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { OrderBy } from '../shared.module';

@Injectable({
  providedIn: 'root'
})
export class DiscountCouponService {
  readonly path: string = 'discount-coupons';

  constructor(private http: HttpClient) {}

  create(coupon: DiscountCouponCreate): Observable<Response<DiscountCoupon>> {
    return this.http.post<Response<DiscountCoupon>>(environment.urlApi + this.path, coupon);
  }

  findPage(
    page: number,
    size: number,
    orderBy: OrderBy | string = 'creationDate',
    direction: Direction = Direction.DESC
  ): Observable<Response<Page<DiscountCoupon>>> {
    const url = environment.urlApi + this.path + `?page=${page}&size=${size}&orderBy=${orderBy}&direction=${direction}`;
    return this.http.get<Response<Page<DiscountCoupon>>>(url);
  }

  findById(id: number | string): Observable<Response<DiscountCoupon>> {
    const url = environment.urlApi + this.path + `/${id}`;
    return this.http.get<Response<DiscountCoupon>>(url);
  }

  findByCode(code: string): Observable<Response<DiscountCoupon>> {
    const url = environment.urlApi + this.path + `/code/${code}`;
    return this.http.get<Response<DiscountCoupon>>(url);
  }

  isValid(code: string): Observable<Response<boolean>> {
    const url = environment.urlApi + this.path + `/is-valid/${code}`;
    return this.http.get<Response<boolean>>(url);
  }
}

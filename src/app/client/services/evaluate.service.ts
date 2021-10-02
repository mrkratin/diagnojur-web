import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Evaluate, Evaluation } from '../models';
import { Response } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class EvaluateService {
  private readonly path = 'evaluations';

  constructor(private http: HttpClient) {}

  evaluate(evaluate: Evaluate): Observable<Response<Evaluation>> {
    const url: string = environment.urlApi + this.path;
    return this.http.post<Response<Evaluation>>(url, evaluate);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

import { Coffee } from '../../models/coffee';

@Service()
export class CoffeeService {

  private httpClient = inject(HttpClient);

  private APIURL = 'https://api.sampleapis.com/coffee/hot';

  getAll(): Observable<Coffee[]> {
    return this.httpClient.get<Coffee[]>(this.APIURL);
  }

  getById(id: number): Observable<Coffee> {
    return this.httpClient.get<Coffee>(`${this.APIURL}/${id}`);
  }
}
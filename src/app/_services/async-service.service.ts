import { Countries } from './../_models/Countries';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL = 'https://restcountries.eu/rest/v2/all';

@Injectable({
  providedIn: 'root'
})

export class AsyncServiceService {

  constructor(private http: HttpClient) { }

  listOfCountries(hasError?: boolean): Observable<Countries> {
    return this.http.get<Countries>(API_URL).pipe(
      delay(2000),
      map(d => {
        if (hasError) {
          throw new Error('An error has occurred while processing your request');
        } else {
          return d;
        }
      }));
  }
}

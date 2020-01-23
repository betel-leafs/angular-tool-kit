import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  constructor(private httpClient: HttpClient) { }
  getCountryCodes(): Observable<Country[]> {
    let url = "https://restcountries.eu/rest/v2/all";
    return this.httpClient.get<Country[]>(url);
  }
}

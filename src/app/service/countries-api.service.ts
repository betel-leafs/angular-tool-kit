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
    this.sleepExample();
    return this.httpClient.get<Country[]>(url);
  }
  private async sleepExample() {
    console.log("Beforep: " + new Date().toString());
    // Sleep thread for 3 seconds
    await this.delay(9000);
    console.log("Afterp:  " + new Date().toString());
  }
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

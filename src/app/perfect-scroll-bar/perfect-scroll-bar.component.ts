import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountriesApiService } from '../service/countries-api.service';

@Component({
  selector: 'app-perfect-scroll-bar',
  templateUrl: './perfect-scroll-bar.component.html',
  styleUrls: ['./perfect-scroll-bar.component.scss']
})
export class PerfectScrollBarComponent implements OnInit {

  public countries: Country[] = [];
  config: any;
  constructor(private apiService: CountriesApiService, ) { }

  ngOnInit() {
    this.config = {
      wheelSpeed: 2,
      minScrollbarLength: 200
    };
    this.apiService.getCountryCodes().subscribe(r => {
      this.countries = r;
    });
  }

}

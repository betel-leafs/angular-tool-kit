import { Component, OnInit, ElementRef } from '@angular/core';
import { Country } from '../../models/country';
import { CountriesApiService } from '../../service/countries-api.service';
import { ShowProgressService } from 'src/app/service/show-progress.service';

@Component({
  selector: 'app-perfect-scroll-bar',
  templateUrl: './perfect-scroll-bar.component.html',
  styleUrls: ['./perfect-scroll-bar.component.scss']
})
export class PerfectScrollBarComponent implements OnInit {

  public countries: Country[] = [];
  config: any;
  isLoading = false;
  constructor(private apiService: CountriesApiService, public showProgressService: ShowProgressService, public elRef: ElementRef) { }

  ngOnInit() {
    this.config = {
      wheelSpeed: 2,
      minScrollbarLength: 200
    };
    let a = this.showProgressService.showSelfOverlay(this.elRef);
    this.apiService.getCountryCodes().subscribe(r => {
      this.countries = r;
      this.showProgressService.close(a);
    });
  }

}

import { Component, OnInit, ElementRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ShowProgressService } from 'src/app/service/show-progress.service';
import { DynamicComponent } from 'src/app/shared/dynamic/dynamic.component';
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
  isLoading = false;
  constructor(private apiService: CountriesApiService, public showProgressService: ShowProgressService, public elRef: ElementRef,private vf:ViewContainerRef,private componentFactoryResolver:ComponentFactoryResolver) { }

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
     let resolver = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
     let componentFactory =   this.vf.createComponent(resolver);
  }

}

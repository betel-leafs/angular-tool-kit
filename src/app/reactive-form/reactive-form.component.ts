import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CountriesApiService } from '../service/countries-api.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  sampleForm: FormGroup;
  result: string;
  public countries: Country[] = [];
  constructor(private formBuilder: FormBuilder, private apiService: CountriesApiService) {
    this.sampleForm = this.formBuilder.group({
      name: [''],
      country: ['']
    });
  };

  ngOnInit() {
    this.apiService.getCountryCodes().subscribe(data => {
      this.countries = data;

    });
  }
  save() {
    this.result = JSON.stringify(this.sampleForm.value);
  }
}

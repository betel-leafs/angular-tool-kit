import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Country } from '../models/country';
import { CountriesApiService } from '../service/countries-api.service';


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
      firstName: [''],
      lastName: [''],
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
  set() {
    this.sampleForm.get('name').setValue("Hello rajesh");
  }
  get() {
    alert(this.sampleForm.get('name').value)
  }
}

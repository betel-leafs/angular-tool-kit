import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Country } from "../models/country";
import { CountriesApiService } from "../service/countries-api.service";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"],
})
export class ReactiveFormComponent implements OnInit {
  sampleForm: FormGroup;
  result: string;
  public countries: Country[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private apiService: CountriesApiService
  ) {
    this.sampleForm = this.formBuilder.group({
      firstName: ["", Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      lastName: [""],
      country: [""],
    });
  }
  public errorHandling = (control: string, error: string) => {
    return this.sampleForm.controls[control].hasError(error);
  }

  ngOnInit() {
    this.apiService.getCountryCodes().subscribe((data) => {
      this.countries = data;
    });
  }
  save() {
    this.result = JSON.stringify(this.sampleForm.value);
  }
  set() {
    this.sampleForm.get("name").setValue("Hello rajesh");
  }
  get() {
    alert(this.sampleForm.get("name").value);
  }
}

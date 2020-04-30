import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-validations',
  templateUrl: './input-validations.component.html',
  styleUrls: ['./input-validations.component.scss']
})
export class InputValidationsComponent implements OnInit {

  public isLoading: boolean = true;
  contextForm: FormGroup;
  ProdForm: FormGroup;
  numberPattern: string = "^[0-9]+(\.[0-9]{1,2})?$"; // Numbers with 2 decimals
  onlyNumbers: string = "^[0-9]*$";
  onlyNumbersExcludeZero = "^[1-9][0-9]*$";
  isFormChanged: boolean = false;
  constructor(private formBuilder: FormBuilder, ) {
    this.contextForm = this.formBuilder.group({
      items: this.formBuilder.array([this.createContextForm()])
    });
  };
  ngOnInit(): void {

    this.ProdForm = this.formBuilder.group({
      Quantity: ['', Validators.compose([Validators.required, Validators.min(0.1)])],
      days: ['', Validators.compose([Validators.required, Validators.pattern(this.onlyNumbers)])],
      hours: ['', Validators.compose([Validators.required, Validators.pattern(this.onlyNumbersExcludeZero)])],
      minitues: ['', Validators.compose([Validators.required, Validators.pattern(this.onlyNumbersExcludeZero)])]
    })
  }
  public errorHandling = (control: string, error: string) => {
    return this.ProdForm.controls[control].hasError(error);
  }
  save() {
  }
  createContextForm() {
    return this.formBuilder.group({
      name: ['rajesh'],
      lastName: ['Mogasala']
    });
  }
  validateNumber(e: any) {
    let input = String.fromCharCode(e.charCode);
    const reg = /^\d*(?:[.,]\d{1,2})?$/;

    if (!reg.test(input)) {
      e.preventDefault();
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports:[SearchComponent]
})
export class SharedModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PerfectScrollBarComponent } from './perfect-scroll-bar/perfect-scroll-bar.component';
import { InputValidationsComponent } from './input-validations/input-validations.component';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CountriesApiService } from './service/countries-api.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NumericDirective, AutoFocusDirective } from './directives/numeric.directive';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { MatDialogContainerComponent } from './mat-dialog-container/mat-dialog-container.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const appRoutes: Routes = [
  { path: 'perfect-scroll', component: PerfectScrollBarComponent },
  { path: 'mat-tree', component: MatTreeComponent },
  { path: 'mat-dialog', component: MatDialogContainerComponent },
  { path: 'input-validations', component: InputValidationsComponent },
  {
    path: '',
    redirectTo: '/input-validations',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PerfectScrollBarComponent,
    InputValidationsComponent,
    PageNotFoundComponent,
    MatTreeComponent,
    NumericDirective,
    AutoFocusDirective,
    MatDialogComponent,
    MatDialogContainerComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    PerfectScrollbarModule,
    CdkTreeModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [MatDialogComponent],
  providers: [CountriesApiService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, {
      provide: MatDialogRef,
      useValue: {}
    }, { provide: MAT_DIALOG_DATA, useValue: [] },],
  bootstrap: [AppComponent]
})
export class AppModule { }

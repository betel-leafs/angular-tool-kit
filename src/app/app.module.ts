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
import { PerfectScrollBarComponent } from './play-ground/perfect-scroll-bar/perfect-scroll-bar.component';
import { InputValidationsComponent } from './play-ground/input-validations/input-validations.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MatTreeComponent } from './play-ground/mat-tree/mat-tree.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CountriesApiService } from './service/countries-api.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NumericDirective, AutoFocusDirective } from './shared/directives/numeric.directive';
import { MatDialogComponent } from './shared/mat-dialog/mat-dialog.component';
import { MatDialogContainerComponent } from './play-ground/mat-dialog-container/mat-dialog-container.component';
import { ReactiveFormComponent } from './play-ground/reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { PlayGroundModule } from './play-ground/play-ground.module';
import { SharedModule } from './shared/shared.module';
import { ProgressContainerComponent } from './progress-container/progress-container.component';
import { DynamicOverlay } from './service/dynamic-overlay.service';
import { DynamicOverlayContainer } from './service/dynamic-overlay-container.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

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
    MatDialogContainerComponent,
    ReactiveFormComponent,
    ProgressContainerComponent
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
    AppRoutingModule,
    PerfectScrollbarModule,
    CdkTreeModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    PlayGroundModule,
    SharedModule
  ],
  entryComponents: [MatDialogComponent, ProgressContainerComponent],
  providers: [CountriesApiService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, {
      provide: MatDialogRef,
      useValue: {}
    }, { provide: MAT_DIALOG_DATA, useValue: [] }, DynamicOverlay, DynamicOverlayContainer],
  bootstrap: [AppComponent]
})
export class AppModule { }

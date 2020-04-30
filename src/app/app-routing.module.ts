import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfectScrollBarComponent } from './play-ground/perfect-scroll-bar/perfect-scroll-bar.component';
import { MatTreeComponent } from './play-ground/mat-tree/mat-tree.component';
import { MatDialogContainerComponent } from './play-ground/mat-dialog-container/mat-dialog-container.component';
import { InputValidationsComponent } from './play-ground/input-validations/input-validations.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './play-ground/reactive-form/reactive-form.component';


const appRoutes: Routes = [
  { path: 'perfect-scroll', component: PerfectScrollBarComponent },
  { path: 'mat-tree', component: MatTreeComponent },
  { path: 'mat-dialog', component: MatDialogContainerComponent },
  { path: 'input-validations', component: InputValidationsComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  {
    path: '',
    redirectTo: '/input-validations',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

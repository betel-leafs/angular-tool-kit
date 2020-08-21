import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PerfectScrollBarComponent } from './perfect-scroll-bar/perfect-scroll-bar.component';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import { MatDialogContainerComponent } from './mat-dialog-container/mat-dialog-container.component';
import { InputValidationsComponent } from './input-validations/input-validations.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BoardComponent } from './board/board.component';


const appRoutes: Routes = [
  { path: 'perfect-scroll', component: PerfectScrollBarComponent },
  { path: 'mat-tree', component: MatTreeComponent },
  { path: 'mat-dialog', component: MatDialogContainerComponent },
  { path: 'input-validations', component: InputValidationsComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'board', component: BoardComponent },
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

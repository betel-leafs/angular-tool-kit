import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-mat-dialog-container',
  templateUrl: './mat-dialog-container.component.html',
  styleUrls: ['./mat-dialog-container.component.scss']
})
export class MatDialogContainerComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      //height: '350px',
      //maxWidth: '850px',
      width:'850px',
      minWidth:'400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

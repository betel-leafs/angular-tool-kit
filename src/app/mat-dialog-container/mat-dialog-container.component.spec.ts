import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogContainerComponent } from './mat-dialog-container.component';

describe('MatDialogContainerComponent', () => {
  let component: MatDialogContainerComponent;
  let fixture: ComponentFixture<MatDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

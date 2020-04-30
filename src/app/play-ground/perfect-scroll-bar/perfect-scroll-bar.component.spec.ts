import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectScrollBarComponent } from './perfect-scroll-bar.component';

describe('PerfectScrollBarComponent', () => {
  let component: PerfectScrollBarComponent;
  let fixture: ComponentFixture<PerfectScrollBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectScrollBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectScrollBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

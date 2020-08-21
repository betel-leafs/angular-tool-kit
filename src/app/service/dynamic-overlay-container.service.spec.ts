import { TestBed } from '@angular/core/testing';

import { DynamicOverlayContainerService } from './dynamic-overlay-container.service';

describe('DynamicOverlayContainerService', () => {
  let service: DynamicOverlayContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicOverlayContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ShowProgressService } from './show-progress.service';

describe('ShowProgressService', () => {
  let service: ShowProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EncodeFacService } from './encode-fac.service';

describe('EncodeFacService', () => {
  let service: EncodeFacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodeFacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

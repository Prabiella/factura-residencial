import { TestBed } from '@angular/core/testing';

import { GetFacturaService } from './get-factura.service';

describe('GetFacturaService', () => {
  let service: GetFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

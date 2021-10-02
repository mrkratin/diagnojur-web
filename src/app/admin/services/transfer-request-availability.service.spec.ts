import { TestBed } from '@angular/core/testing';

import { TransferRequestAvailabilityService } from './transfer-request-availability.service';

describe('TransferRequestAvailabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferRequestAvailabilityService = TestBed.get(TransferRequestAvailabilityService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TransferRequestService } from './transfer-request.service';

describe('TransferRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferRequestService = TestBed.get(TransferRequestService);
    expect(service).toBeTruthy();
  });
});

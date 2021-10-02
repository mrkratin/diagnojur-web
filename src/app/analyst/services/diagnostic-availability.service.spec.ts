import { TestBed } from '@angular/core/testing';

import { DiagnosticAvailabilityService } from './diagnostic-availability.service';

describe('DiagnosticAvailabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnosticAvailabilityService = TestBed.get(DiagnosticAvailabilityService);
    expect(service).toBeTruthy();
  });
});

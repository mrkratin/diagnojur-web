import { TestBed } from '@angular/core/testing';

import { SolicitationHistoryService } from './solicitation-history.service';

describe('SolicitationHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitationHistoryService = TestBed.get(SolicitationHistoryService);
    expect(service).toBeTruthy();
  });
});

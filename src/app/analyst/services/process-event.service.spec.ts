import { TestBed } from '@angular/core/testing';

import { ProcessEventService } from './process-event.service';

describe('ProcessEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessEventService = TestBed.get(ProcessEventService);
    expect(service).toBeTruthy();
  });
});

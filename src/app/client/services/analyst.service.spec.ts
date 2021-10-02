import { TestBed } from '@angular/core/testing';

import { AnalystService } from './analyst.service';

describe('AnalystService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalystService = TestBed.get(AnalystService);
    expect(service).toBeTruthy();
  });
});

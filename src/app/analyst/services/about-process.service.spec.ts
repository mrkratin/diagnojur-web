import { TestBed } from '@angular/core/testing';

import { AboutProcessService } from './about-process.service';

describe('AboutProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutProcessService = TestBed.get(AboutProcessService);
    expect(service).toBeTruthy();
  });
});

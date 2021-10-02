import { inject, TestBed } from '@angular/core/testing';

import { BecomeAnalystGuard } from './become-analyst.guard';

describe('BecomeAnalystGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BecomeAnalystGuard]
    });
  });

  it('should ...', inject([BecomeAnalystGuard], (guard: BecomeAnalystGuard) => {
    expect(guard).toBeTruthy();
  }));
});

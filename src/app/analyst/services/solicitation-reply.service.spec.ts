import { TestBed } from '@angular/core/testing';

import { SolicitationReplyService } from './solicitation-reply.service';

describe('SolicitationReplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitationReplyService = TestBed.get(SolicitationReplyService);
    expect(service).toBeTruthy();
  });
});

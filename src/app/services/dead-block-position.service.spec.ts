import { TestBed } from '@angular/core/testing';

import { DeadBlockPositionService } from './dead-block-position.service';

describe('DeadBlockPositionService', () => {
  let service: DeadBlockPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeadBlockPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

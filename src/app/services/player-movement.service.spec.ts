import { TestBed } from '@angular/core/testing';

import { PlayerMovementService } from './player-movement.service';

describe('PlayerMovementService', () => {
  let service: PlayerMovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerMovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

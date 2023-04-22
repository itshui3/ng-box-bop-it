import { TestBed } from '@angular/core/testing';

import { LevelBuilderService } from './level-builder.service';

describe('LevelBuilderService', () => {
  let service: LevelBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

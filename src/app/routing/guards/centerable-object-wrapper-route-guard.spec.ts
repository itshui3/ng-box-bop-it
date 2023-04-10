import { TestBed } from '@angular/core/testing';

import { CenterableObjectWrapperRouteGuard } from './centerable-object-wrapper-route-guard';

describe('CanActivateRouteService', () => {
  let service: CenterableObjectWrapperRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenterableObjectWrapperRouteGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

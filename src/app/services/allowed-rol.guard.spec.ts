import { TestBed } from '@angular/core/testing';

import { AllowedRolGuard } from './allowed-rol.guard';

describe('AllowedRolGuard', () => {
  let guard: AllowedRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowedRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

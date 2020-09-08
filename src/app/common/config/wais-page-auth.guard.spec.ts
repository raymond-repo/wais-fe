import { TestBed, async, inject } from '@angular/core/testing';

import { WaisPageAuthGuard } from './wais-page-auth.guard';

describe('WaisPageAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaisPageAuthGuard]
    });
  });

  it('should ...', inject([WaisPageAuthGuard], (guard: WaisPageAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { OwcControlService } from './owc-control.service';

describe('OwcControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwcControlService = TestBed.inject(OwcControlService);
    expect(service).toBeTruthy();
  });
});

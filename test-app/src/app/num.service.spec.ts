import { TestBed } from '@angular/core/testing';

import { NumService } from './num.service';

describe('NumService', () => {
  let service: NumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Demoservice } from './demoservice';

describe('Demoservice', () => {
  let service: Demoservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Demoservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

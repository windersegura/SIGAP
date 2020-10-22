import { TestBed } from '@angular/core/testing';

import { AguapotableService } from './aguapotable.service';

describe('AguapotableService', () => {
  let service: AguapotableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AguapotableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

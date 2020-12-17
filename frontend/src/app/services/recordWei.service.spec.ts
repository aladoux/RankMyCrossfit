import { TestBed } from '@angular/core/testing';

import { RecordWeiService } from './recordWei.service';

describe('WeightliftingService', () => {
  let service: WeightliftingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightliftingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

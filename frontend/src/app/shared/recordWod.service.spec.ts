import { TestBed } from '@angular/core/testing';

import { RecordWodService } from './recordWod.service';

describe('RecordWodService', () => {
  let service: RecordWodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordWodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RecordWeiService } from './recordWei.service';

describe('RecordWeiService', () => {
  let service: RecordWeiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordWeiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

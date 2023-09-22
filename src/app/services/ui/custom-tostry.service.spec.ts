import { TestBed } from '@angular/core/testing';

import { CustomTostryService } from './custom-tostry.service';

describe('CustomTostryService', () => {
  let service: CustomTostryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTostryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

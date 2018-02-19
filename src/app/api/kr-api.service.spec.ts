import { TestBed, inject } from '@angular/core/testing';

import { KrApiService } from './kr-api.service';

describe('KrApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KrApiService]
    });
  });

  it('should be created', inject([KrApiService], (service: KrApiService) => {
    expect(service).toBeTruthy();
  }));
});

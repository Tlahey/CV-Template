import { TestBed, inject } from '@angular/core/testing';

import { InformationsService } from './informations.service';

describe('InformationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformationsService]
    });
  });

  it('should be created', inject([InformationsService], (service: InformationsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { PromoCodeService } from './promo-code.service';

describe('PromoCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromoCodeService]
    });
  });

  it('should be created', inject([PromoCodeService], (service: PromoCodeService) => {
    expect(service).toBeTruthy();
  }));
});

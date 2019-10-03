import { TestBed, inject } from '@angular/core/testing';

import { ValidaIncidenteEpsService } from './valida-incidente-eps.service';

describe('ValidaIncidenteEpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidaIncidenteEpsService]
    });
  });

  it('should be created', inject([ValidaIncidenteEpsService], (service: ValidaIncidenteEpsService) => {
    expect(service).toBeTruthy();
  }));
});

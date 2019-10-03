import { TestBed, inject } from '@angular/core/testing';

import { ValidaIncidenteService } from './valida-incidente.service';

describe('ValidaIncidenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidaIncidenteService]
    });
  });

  it('should be created', inject([ValidaIncidenteService], (service: ValidaIncidenteService) => {
    expect(service).toBeTruthy();
  }));
});

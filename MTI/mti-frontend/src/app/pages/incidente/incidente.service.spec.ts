import { TestBed, inject } from '@angular/core/testing';

import { IncidenteService } from './incidente.service';

describe('IncidenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncidenteService]
    });
  });

  it('should be created', inject([IncidenteService], (service: IncidenteService) => {
    expect(service).toBeTruthy();
  }));
});

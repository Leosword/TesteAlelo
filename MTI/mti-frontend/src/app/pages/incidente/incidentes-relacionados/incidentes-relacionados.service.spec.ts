import { TestBed, inject } from '@angular/core/testing';

import { IncidentesRelacionadosService } from './incidentes-relacionados.service';

describe('IncidentesRelacionadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncidentesRelacionadosService]
    });
  });

  it('should be created', inject([IncidentesRelacionadosService], (service: IncidentesRelacionadosService) => {
    expect(service).toBeTruthy();
  }));
});

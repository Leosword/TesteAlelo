import { TestBed, inject } from '@angular/core/testing';

import { IncidenteDetalheService } from './incidente-detalhe.service';

describe('IncidenteDetalheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncidenteDetalheService]
    });
  });

  it('should be created', inject([IncidenteDetalheService], (service: IncidenteDetalheService) => {
    expect(service).toBeTruthy();
  }));
});

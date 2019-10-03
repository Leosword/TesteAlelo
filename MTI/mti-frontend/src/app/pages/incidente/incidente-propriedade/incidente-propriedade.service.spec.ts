import { TestBed, inject } from '@angular/core/testing';

import { IncidentePropriedadeService } from './incidente-propriedade.service';

describe('IncidentePropriedadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncidentePropriedadeService]
    });
  });

  it('should be created', inject([IncidentePropriedadeService], (service: IncidentePropriedadeService) => {
    expect(service).toBeTruthy();
  }));
});

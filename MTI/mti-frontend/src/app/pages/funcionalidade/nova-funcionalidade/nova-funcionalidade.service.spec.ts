import { TestBed, inject } from '@angular/core/testing';

import { NovaFuncionalidadeService } from './nova-funcionalidade.service';

describe('NovaFuncionalidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovaFuncionalidadeService]
    });
  });

  it('should be created', inject([NovaFuncionalidadeService], (service: NovaFuncionalidadeService) => {
    expect(service).toBeTruthy();
  }));
});

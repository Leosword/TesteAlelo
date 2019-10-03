import { TestBed, inject } from '@angular/core/testing';

import { FuncionalidadeService } from './funcionalidade.service';

describe('FuncionalidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuncionalidadeService]
    });
  });

  it('should be created', inject([FuncionalidadeService], (service: FuncionalidadeService) => {
    expect(service).toBeTruthy();
  }));
});

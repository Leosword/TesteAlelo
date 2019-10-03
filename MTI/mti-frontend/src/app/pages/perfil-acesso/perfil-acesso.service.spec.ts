import { TestBed, inject } from '@angular/core/testing';

import { PerfilAcessoService } from './perfil-acesso.service';

describe('PerfilAcessoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfilAcessoService]
    });
  });

  it('should be created', inject([PerfilAcessoService], (service: PerfilAcessoService) => {
    expect(service).toBeTruthy();
  }));
});

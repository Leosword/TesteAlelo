import { TestBed, inject } from '@angular/core/testing';

import { NovoPerfilAcessoService } from './novo-perfil-acesso.service';

describe('NovoPerfilAcessoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovoPerfilAcessoService]
    });
  });

  it('should be created', inject([NovoPerfilAcessoService], (service: NovoPerfilAcessoService) => {
    expect(service).toBeTruthy();
  }));
});

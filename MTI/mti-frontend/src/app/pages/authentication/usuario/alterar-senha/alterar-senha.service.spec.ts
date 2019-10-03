import { TestBed, inject } from '@angular/core/testing';

import { AlterarSenhaService } from './alterar-senha.service';

describe('AlterarSenhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlterarSenhaService]
    });
  });

  it('should be created', inject([AlterarSenhaService], (service: AlterarSenhaService) => {
    expect(service).toBeTruthy();
  }));
});

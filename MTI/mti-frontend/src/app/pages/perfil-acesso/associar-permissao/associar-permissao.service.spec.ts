import { TestBed, inject } from '@angular/core/testing';

import { AssociarPermissaoService } from './associar-permissao.service';

describe('AssociarPermissaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssociarPermissaoService]
    });
  });

  it('should be created', inject([AssociarPermissaoService], (service: AssociarPermissaoService) => {
    expect(service).toBeTruthy();
  }));
});

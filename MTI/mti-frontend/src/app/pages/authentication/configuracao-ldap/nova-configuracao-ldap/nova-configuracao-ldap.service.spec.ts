import { TestBed, inject } from '@angular/core/testing';

import { NovaConfiguracaoLdapService } from './nova-configuracao-ldap.service';

describe('NovaConfiguracaoLdapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovaConfiguracaoLdapService]
    });
  });

  it('should be created', inject([NovaConfiguracaoLdapService], (service: NovaConfiguracaoLdapService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ConfiguracaoLdapService } from './configuracao-ldap.service';

describe('ConfiguracaoLdapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfiguracaoLdapService]
    });
  });

  it('should be created', inject([ConfiguracaoLdapService], (service: ConfiguracaoLdapService) => {
    expect(service).toBeTruthy();
  }));
});

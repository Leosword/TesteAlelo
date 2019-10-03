import { TestBed, inject } from '@angular/core/testing';

import { NovoDominioLdapService } from './novo-dominio-ldap.service';

describe('NovoDominioLdapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovoDominioLdapService]
    });
  });

  it('should be created', inject([NovoDominioLdapService], (service: NovoDominioLdapService) => {
    expect(service).toBeTruthy();
  }));
});

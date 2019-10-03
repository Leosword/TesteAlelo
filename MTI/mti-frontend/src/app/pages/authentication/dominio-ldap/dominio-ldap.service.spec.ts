import { TestBed, inject } from '@angular/core/testing';

import { DominioLdapService } from './dominio-ldap.service';

describe('DominioLdapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DominioLdapService]
    });
  });

  it('should be created', inject([DominioLdapService], (service: DominioLdapService) => {
    expect(service).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaConfiguracaoLdapComponent } from './nova-configuracao-ldap.component';

describe('NovaConfiguracaoLdapComponent', () => {
  let component: NovaConfiguracaoLdapComponent;
  let fixture: ComponentFixture<NovaConfiguracaoLdapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaConfiguracaoLdapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaConfiguracaoLdapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

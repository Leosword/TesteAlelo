import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoLdapComponent } from './configuracao-ldap.component';

describe('ConfiguracaoLdapComponent', () => {
  let component: ConfiguracaoLdapComponent;
  let fixture: ComponentFixture<ConfiguracaoLdapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoLdapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoLdapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoDominioLdapComponent } from './novo-dominio-ldap.component';

describe('NovoDominioLdapComponent', () => {
  let component: NovoDominioLdapComponent;
  let fixture: ComponentFixture<NovoDominioLdapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoDominioLdapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoDominioLdapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DominioLdapComponent } from './dominio-ldap.component';

describe('DominioLdapComponent', () => {
  let component: DominioLdapComponent;
  let fixture: ComponentFixture<DominioLdapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominioLdapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DominioLdapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

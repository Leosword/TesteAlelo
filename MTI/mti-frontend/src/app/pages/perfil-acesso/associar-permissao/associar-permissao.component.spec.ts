import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociarPermissaoComponent } from './associar-permissao.component';

describe('AssociarPermissaoComponent', () => {
  let component: AssociarPermissaoComponent;
  let fixture: ComponentFixture<AssociarPermissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociarPermissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociarPermissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

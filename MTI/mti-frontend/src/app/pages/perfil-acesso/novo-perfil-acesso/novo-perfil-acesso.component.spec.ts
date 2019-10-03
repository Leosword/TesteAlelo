import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPerfilAcessoComponent } from './novo-perfil-acesso.component';

describe('NovoPerfilAcessoComponent', () => {
  let component: NovoPerfilAcessoComponent;
  let fixture: ComponentFixture<NovoPerfilAcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPerfilAcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPerfilAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

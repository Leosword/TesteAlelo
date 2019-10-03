import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaFuncionalidadeComponent } from './nova-funcionalidade.component';

describe('NovaFuncionalidadeComponent', () => {
  let component: NovaFuncionalidadeComponent;
  let fixture: ComponentFixture<NovaFuncionalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaFuncionalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaFuncionalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

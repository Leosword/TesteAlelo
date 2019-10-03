import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenteDetalheComponent } from './incidente-detalhe.component';

describe('IncidenteDetalheComponent', () => {
  let component: IncidenteDetalheComponent;
  let fixture: ComponentFixture<IncidenteDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenteDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenteDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentesRelacionadosComponent } from './incidentes-relacionados.component';

describe('IncidentesRelacionadosComponent', () => {
  let component: IncidentesRelacionadosComponent;
  let fixture: ComponentFixture<IncidentesRelacionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentesRelacionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentesRelacionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

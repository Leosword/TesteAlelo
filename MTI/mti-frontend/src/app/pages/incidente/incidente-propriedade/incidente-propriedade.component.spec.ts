import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentePropriedadeComponent } from './incidente-propriedade.component';

describe('IncidentePropriedadeComponent', () => {
  let component: IncidentePropriedadeComponent;
  let fixture: ComponentFixture<IncidentePropriedadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentePropriedadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentePropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

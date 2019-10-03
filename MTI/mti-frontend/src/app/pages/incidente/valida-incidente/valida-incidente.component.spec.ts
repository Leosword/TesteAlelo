import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaIncidenteComponent } from './valida-incidente.component';

describe('ValidaIncidenteComponent', () => {
  let component: ValidaIncidenteComponent;
  let fixture: ComponentFixture<ValidaIncidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaIncidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidaIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

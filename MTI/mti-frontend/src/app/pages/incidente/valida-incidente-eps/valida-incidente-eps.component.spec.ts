import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaIncidenteEpsComponent } from './valida-incidente-eps.component';

describe('ValidaIncidenteEpsComponent', () => {
  let component: ValidaIncidenteEpsComponent;
  let fixture: ComponentFixture<ValidaIncidenteEpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaIncidenteEpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidaIncidenteEpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

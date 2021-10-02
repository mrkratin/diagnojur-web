import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationDiagnosisComponent } from './solicitation-diagnosis.component';

describe('SolicitationDiagnosisComponent', () => {
  let component: SolicitationDiagnosisComponent;
  let fixture: ComponentFixture<SolicitationDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitationDiagnosisComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

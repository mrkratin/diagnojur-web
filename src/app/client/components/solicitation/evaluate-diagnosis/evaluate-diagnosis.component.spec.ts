import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateDiagnosisComponent } from './evaluate-diagnosis.component';

describe('EvaluateDiagnosisComponent', () => {
  let component: EvaluateDiagnosisComponent;
  let fixture: ComponentFixture<EvaluateDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluateDiagnosisComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisTypesComponent } from './diagnosis-types.component';

describe('DiagnosisTypesComponent', () => {
  let component: DiagnosisTypesComponent;
  let fixture: ComponentFixture<DiagnosisTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisTypesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

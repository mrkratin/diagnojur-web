import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticAnswerConfirmComponent } from './diagnostic-answer-confirm.component';

describe('DiagnosticAnswerConfirmComponent', () => {
  let component: DiagnosticAnswerConfirmComponent;
  let fixture: ComponentFixture<DiagnosticAnswerConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosticAnswerConfirmComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticAnswerConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

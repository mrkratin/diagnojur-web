import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticAnswerComponent } from './diagnostic-answer.component';

describe('DiagnosticAnswerComponent', () => {
  let component: DiagnosticAnswerComponent;
  let fixture: ComponentFixture<DiagnosticAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosticAnswerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

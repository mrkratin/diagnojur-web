import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticDisplayComponent } from './diagnostic-display.component';

describe('DiagnosticDisplayComponent', () => {
  let component: DiagnosticDisplayComponent;
  let fixture: ComponentFixture<DiagnosticDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosticDisplayComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

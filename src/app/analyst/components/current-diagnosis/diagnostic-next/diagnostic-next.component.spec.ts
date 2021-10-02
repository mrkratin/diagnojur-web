import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticNextComponent } from './diagnostic-next.component';

describe('DiagnosticNextComponent', () => {
  let component: DiagnosticNextComponent;
  let fixture: ComponentFixture<DiagnosticNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosticNextComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

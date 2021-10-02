import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDiagnosisComponent } from './current-diagnosis.component';

describe('CurrentDiagnosisComponent', () => {
  let component: CurrentDiagnosisComponent;
  let fixture: ComponentFixture<CurrentDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentDiagnosisComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

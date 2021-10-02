import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisPendingComponent } from './diagnosis-pending.component';

describe('DiagnosisPendingComponent', () => {
  let component: DiagnosisPendingComponent;
  let fixture: ComponentFixture<DiagnosisPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisPendingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

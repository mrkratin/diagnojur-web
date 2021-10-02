import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystPendingComponent } from './analyst-pending.component';

describe('AnalystPendingComponent', () => {
  let component: AnalystPendingComponent;
  let fixture: ComponentFixture<AnalystPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalystPendingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

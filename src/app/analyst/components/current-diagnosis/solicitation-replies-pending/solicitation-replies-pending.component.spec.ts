import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationRepliesPendingComponent } from './solicitation-replies-pending.component';

describe('SolicitationRepliesPendingComponent', () => {
  let component: SolicitationRepliesPendingComponent;
  let fixture: ComponentFixture<SolicitationRepliesPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitationRepliesPendingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationRepliesPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationTimelineComponent } from './solicitation-timeline.component';

describe('SolicitationTimelineComponent', () => {
  let component: SolicitationTimelineComponent;
  let fixture: ComponentFixture<SolicitationTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitationTimelineComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

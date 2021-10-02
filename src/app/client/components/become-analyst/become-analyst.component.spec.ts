import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAnalystComponent } from './become-analyst.component';

describe('BecomeAnalystComponent', () => {
  let component: BecomeAnalystComponent;
  let fixture: ComponentFixture<BecomeAnalystComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeAnalystComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

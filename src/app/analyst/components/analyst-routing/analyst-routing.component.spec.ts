import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystRoutingComponent } from './analyst-routing.component';

describe('AnalystRoutingComponent', () => {
  let component: AnalystRoutingComponent;
  let fixture: ComponentFixture<AnalystRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalystRoutingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

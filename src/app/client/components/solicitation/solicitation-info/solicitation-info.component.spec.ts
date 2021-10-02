import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationInfoComponent } from './solicitation-info.component';

describe('SolicitationInfoComponent', () => {
  let component: SolicitationInfoComponent;
  let fixture: ComponentFixture<SolicitationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitationInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

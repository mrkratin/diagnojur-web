import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAnalystComponent } from './verify-analyst.component';

describe('VerifyAnalystComponent', () => {
  let component: VerifyAnalystComponent;
  let fixture: ComponentFixture<VerifyAnalystComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyAnalystComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

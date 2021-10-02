import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystMenuComponent } from './analyst-menu.component';

describe('AnalystMenuComponent', () => {
  let component: AnalystMenuComponent;
  let fixture: ComponentFixture<AnalystMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalystMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

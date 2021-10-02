import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationTypesComponent } from './solicitation-types.component';

describe('SolicitationTypesComponent', () => {
  let component: SolicitationTypesComponent;
  let fixture: ComponentFixture<SolicitationTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitationTypesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

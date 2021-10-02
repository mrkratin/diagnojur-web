import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPenalizationComponent } from './list-penalization.component';

describe('ListPenalizationComponent', () => {
  let component: ListPenalizationComponent;
  let fixture: ComponentFixture<ListPenalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPenalizationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPenalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

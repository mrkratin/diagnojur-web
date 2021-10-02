import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSolicitationsComponent } from './list-solicitations.component';

describe('ListSolicitationsComponent', () => {
  let component: ListSolicitationsComponent;
  let fixture: ComponentFixture<ListSolicitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListSolicitationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSolicitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

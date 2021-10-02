import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolicitationComponent } from './add-solicitation.component';

describe('AddSolicitationComponent', () => {
  let component: AddSolicitationComponent;
  let fixture: ComponentFixture<AddSolicitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddSolicitationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSolicitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

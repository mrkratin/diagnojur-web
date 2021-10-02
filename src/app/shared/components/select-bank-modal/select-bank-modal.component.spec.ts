import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBankModalComponent } from './select-bank-modal.component';

describe('SelectBankModalComponent', () => {
  let component: SelectBankModalComponent;
  let fixture: ComponentFixture<SelectBankModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBankModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBankModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

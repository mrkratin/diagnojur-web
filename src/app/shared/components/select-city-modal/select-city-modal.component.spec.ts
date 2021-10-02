import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCityModalComponent } from './select-city-modal.component';

describe('SelectCityModalComponent', () => {
  let component: SelectCityModalComponent;
  let fixture: ComponentFixture<SelectCityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

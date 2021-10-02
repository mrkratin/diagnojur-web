import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscountCouponComponent } from './add-discount-coupon.component';

describe('AddDiscountCouponComponent', () => {
  let component: AddDiscountCouponComponent;
  let fixture: ComponentFixture<AddDiscountCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddDiscountCouponComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscountCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { DiscountCouponService } from '../../../../shared/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscountCoupon, DiscountCouponTypeEnum, DjForms } from '../../../../shared/models';
import * as moment from 'moment';

@Component({
  selector: 'dj-add-discount-coupon',
  templateUrl: './add-discount-coupon.component.html',
  styleUrls: ['./add-discount-coupon.component.css']
})
export class AddDiscountCouponComponent implements OnInit {
  isLoading = false;
  formGroup: FormGroup;
  sendCoupon: (coupon: DiscountCoupon) => void;

  constructor(
    public nzModalRef: NzModalRef,
    private service: DiscountCouponService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  save() {
    this.isLoading = true;
    this.service.create(this.formGroup.value).subscribe(response => {
      this.isLoading = false;
      this.sendCoupon(response.data);
      this.nzModalRef.destroy();
    });
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      code: DjForms.DiscountCouponCode(),
      type: [DiscountCouponTypeEnum.MONEY, [Validators.required]],
      discount: [10, [Validators.required]],
      totalAmount: [1, [Validators.required]],
      validity: [moment(new Date()).toDate(), [Validators.required]]
    });
  }
}

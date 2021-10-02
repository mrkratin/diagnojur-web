import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DiscountCouponService } from '../../../shared/services';
import { Direction, DiscountCoupon, DiscountCouponTypeEnum, Page } from '../../../shared/models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { AddDiscountCouponComponent } from './add-discount-coupon';

@Component({
  selector: 'dj-discount-coupon',
  templateUrl: './discount-coupon.component.html',
  styleUrls: ['./discount-coupon.component.css']
})
export class DiscountCouponComponent implements OnInit {
  isLoading = true;
  discountCoupons: Page<DiscountCoupon>;
  formGroup: FormGroup;
  nzModalRef: NzModalRef;
  readonly directions: Direction[] = [Direction.DESC, Direction.ASC];
  readonly money: DiscountCouponTypeEnum = DiscountCouponTypeEnum.MONEY;
  readonly percentage: DiscountCouponTypeEnum = DiscountCouponTypeEnum.PERCENTAGE;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private service: DiscountCouponService,
    private modalService: NzModalService
  ) {}

  ngOnInit() {
    this.initForm();
    this.initCoupons();
  }

  onBack() {
    this.location.back();
  }

  addCoupon() {
    this.nzModalRef = this.modalService.create({
      nzTitle: 'Novo Cupon de Desconto',
      nzContent: AddDiscountCouponComponent,
      nzComponentParams: {
        sendCoupon: (discount: DiscountCoupon) => {
          this.initCoupons();
        }
      },
      nzFooter: [
        {
          label: 'Cancelar',
          type: 'default',
          onClick: (component: AddDiscountCouponComponent) => component.nzModalRef.destroy()
        },
        {
          label: 'Adicionar',
          loading: (component: AddDiscountCouponComponent) => component.isLoading,
          disabled: (component: AddDiscountCouponComponent) => component.formGroup.invalid,
          type: 'primary',
          onClick: (component: AddDiscountCouponComponent) => component.save()
        }
      ]
      // nzFooter: null
    });
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      size: 5,
      page: 0,
      orderBy: 'creationDate',
      direction: this.directions[0]
    });

    this.formGroup.valueChanges.subscribe(value => {
      this.initCoupons();
    });
  }

  private initCoupons() {
    this.isLoading = true;
    this.service
      .findPage(
        this.formGroup.value.page,
        this.formGroup.value.size,
        this.formGroup.value.orderBy,
        this.formGroup.value.direction
      )
      .subscribe(
        response => {
          this.discountCoupons = response.data;
          this.isLoading = false;
        },
        () => (this.isLoading = false)
      );
  }
}

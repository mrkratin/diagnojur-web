import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PaymentService } from '../../services';
import { Payment } from '../../models';
import { Page } from '../../../shared/models';

@Component({
  selector: 'dj-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  isLoading = true;
  payments: Page<Payment>;

  constructor(private service: PaymentService, private location: Location) {}

  ngOnInit() {
    this.service.findByPerson(0, 10).subscribe(
      response => {
        this.isLoading = false;
        this.payments = response.data;
      },
      () => (this.isLoading = false)
    );
  }

  onBack() {
    this.location.back();
  }
}

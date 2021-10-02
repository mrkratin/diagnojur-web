import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'dj-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(
    private readonly location: Location
  ) {}

  ngOnInit() {
  }

  onBack() {
    this.location.back();
  }
}

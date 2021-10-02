import { Component, OnInit } from '@angular/core';
import { Transfer } from 'src/app/analyst/models';
import { BillingService } from 'src/app/analyst/services';
import { Profile } from 'src/app/client/models';

@Component({
  selector: 'dj-list-transfers',
  templateUrl: './list-transfers.component.html',
  styleUrls: ['./list-transfers.component.css']
})
export class ListTransfersComponent implements OnInit {
  transfers: Transfer[];
  loading = false;

  constructor(private readonly service: BillingService) {}

  ngOnInit() {
    this.loading = true;

    let json = localStorage.getItem('profile');
    if (!json) {
      json = sessionStorage.getItem('profile');
    }

    const profile: Profile = JSON.parse(json);

    this.service.findTransfers(profile.analyst.id).subscribe(
      response => {
        this.loading = false;
        this.transfers = response.data;
      },
      () => {
        this.loading = false;
      }
    );
  }
}

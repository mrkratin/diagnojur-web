import { Component, OnInit } from '@angular/core';
import { RequestWithdraw } from 'src/app/analyst/models';
import { BillingService } from 'src/app/analyst/services';
import { Profile } from 'src/app/client/models';

@Component({
  selector: 'dj-list-request-withdraw',
  templateUrl: './list-request-withdraw.component.html',
  styleUrls: ['./list-request-withdraw.component.css']
})
export class ListRequestWithdrawComponent implements OnInit {
  requests: RequestWithdraw[];
  loading = false;

  constructor(private readonly service: BillingService) {}

  ngOnInit() {
    this.loading = true;

    let json = localStorage.getItem('profile');
    if (!json) {
      json = sessionStorage.getItem('profile');
    }

    const profile: Profile = JSON.parse(json);

    this.service.findWithdrawRequests(profile.analyst.id).subscribe(
      response => {
        this.loading = false;
        this.requests = response.data;
        console.log(this.requests);
      },
      () => {
        this.loading = false;
      }
    );
  }
}

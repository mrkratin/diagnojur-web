import { Component, OnInit } from '@angular/core';
import { SolicitationHistory } from '../../models';
import { NzModalRef } from 'ng-zorro-antd';
import { SolicitationHistoryService } from '../../services';
import { DateMomentPipeType } from '../../../shared/pipes';

@Component({
  selector: 'dj-solicitation-timeline',
  templateUrl: './solicitation-timeline.component.html',
  styleUrls: ['./solicitation-timeline.component.css']
})
export class SolicitationTimelineComponent implements OnInit {
  isLoading = true;
  solicitationId: number;
  history: SolicitationHistory[];
  formatDate: DateMomentPipeType = DateMomentPipeType.RESUME_DATE_TIME;

  constructor(public nzModalRef: NzModalRef, private service: SolicitationHistoryService) {}

  ngOnInit() {
    this.service.findBySolicitation(this.solicitationId).subscribe(
      response => {
        this.history = response.data;
        this.isLoading = false;
      },
      () => (this.isLoading = false)
    );
  }
}

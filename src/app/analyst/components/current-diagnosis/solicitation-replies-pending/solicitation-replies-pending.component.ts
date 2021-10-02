import { Component, Input, OnInit } from '@angular/core';
import { SolicitationReplyPending } from '../../../models';
import { DateMomentPipeType } from '../../../../shared/pipes';

@Component({
  selector: 'dj-solicitation-replies-pending',
  templateUrl: './solicitation-replies-pending.component.html',
  styleUrls: ['./solicitation-replies-pending.component.css']
})
export class SolicitationRepliesPendingComponent implements OnInit {
  @Input()
  replies: SolicitationReplyPending[];
  fromNow: DateMomentPipeType = DateMomentPipeType.FROM_NOW;

  constructor() {}

  ngOnInit() {
    console.log(this.replies);
  }
}

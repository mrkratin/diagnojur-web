import { Component, Input, OnInit } from '@angular/core';
import { DiagnosisStatusEnum, SmallDiagnosis } from '../../../models';
import * as moment from 'moment';

@Component({
  selector: 'dj-diagnosis-pending',
  templateUrl: './diagnosis-pending.component.html',
  styleUrls: ['./diagnosis-pending.component.css']
})
export class DiagnosisPendingComponent implements OnInit {
  @Input()
  diagnostic: SmallDiagnosis;
  deadLine: number;

  constructor() {}

  ngOnInit() {
    this.deadLine =
      this.diagnostic.status !== DiagnosisStatusEnum.COMPLETED
        ? moment(this.diagnostic.deadLine)
            .toDate()
            .getTime()
        : undefined;
  }
}

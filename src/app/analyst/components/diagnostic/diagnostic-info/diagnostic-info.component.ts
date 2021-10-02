import { Component, Input, OnInit } from '@angular/core';
import { DiagnosisStatusEnum, Diagnostic } from '../../../models';
import * as moment from 'moment';
import { SolicitationTypeEnum } from '../../../../shared';

@Component({
  selector: 'dj-diagnostic-info',
  templateUrl: './diagnostic-info.component.html',
  styleUrls: ['./diagnostic-info.component.css']
})
export class DiagnosticInfoComponent implements OnInit {
  @Input()
  diagnostic: Diagnostic;
  showInfo = true;
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

  get solicitationTypeDescription(): string {
    switch (this.diagnostic.solicitation.type) {
      case SolicitationTypeEnum.SIMPLE:
        return 'Diagnóstico de até três últimos e mais atuais eventos do processo';
      case SolicitationTypeEnum.SPECIFIC:
        return 'Diagnóstico de um evento específico do processo, dentre as opções abaixo';
      case SolicitationTypeEnum.COMPLETE:
        return 'Diagnóstico dos eventos, desde a distribuição até o evento mais atual, do que for mais importante.';
      default:
        return '';
    }
  }
}

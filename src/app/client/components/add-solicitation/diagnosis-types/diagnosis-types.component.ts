import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { SolicitationSpecificType, specificTypes } from '../../../../shared';

@Component({
  selector: 'dj-diagnosis-types',
  templateUrl: './diagnosis-types.component.html',
  styleUrls: ['./diagnosis-types.component.css']
})
export class DiagnosisTypesComponent implements OnInit {
  sTypes: SolicitationSpecificType[] = specificTypes;

  constructor(public nzModalRef: NzModalRef) {}

  ngOnInit() {}
}

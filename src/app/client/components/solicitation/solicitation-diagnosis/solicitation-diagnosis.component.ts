import { Component, Input, OnInit } from '@angular/core';
import { Diagnosis } from '../../../models';

@Component({
  selector: 'dj-solicitation-diagnosis',
  templateUrl: './solicitation-diagnosis.component.html',
  styleUrls: ['./solicitation-diagnosis.component.css']
})
export class SolicitationDiagnosisComponent implements OnInit {
  @Input()
  diagnosis: Diagnosis;

  constructor() {}

  ngOnInit() {}
}

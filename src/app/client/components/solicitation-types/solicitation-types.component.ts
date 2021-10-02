import { Component, OnInit } from '@angular/core';
import { SolicitationSpecificType, specificTypes } from '../../../shared';

@Component({
  selector: 'dj-solicitation-types',
  templateUrl: './solicitation-types.component.html',
  styleUrls: ['./solicitation-types.component.css']
})
export class SolicitationTypesComponent implements OnInit {
  sTypes: SolicitationSpecificType[] = specificTypes;

  constructor() {}

  ngOnInit() {}
}

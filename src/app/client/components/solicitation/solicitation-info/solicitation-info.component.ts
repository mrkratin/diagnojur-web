import { Component, Input, OnInit } from '@angular/core';
import { Solicitation } from '../../../models';

@Component({
  selector: 'dj-solicitation-info',
  templateUrl: './solicitation-info.component.html',
  styleUrls: ['./solicitation-info.component.css']
})
export class SolicitationInfoComponent implements OnInit {
  @Input()
  solicitation: Solicitation;
  showInfo = true;

  constructor() {}

  ngOnInit() {}
}

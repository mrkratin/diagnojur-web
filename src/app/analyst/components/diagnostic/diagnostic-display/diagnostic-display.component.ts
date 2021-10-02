import { Component, Input, OnInit } from '@angular/core';
import { Diagnostic } from '../../../models/diagnostic';

@Component({
  selector: 'dj-diagnostic-display',
  templateUrl: './diagnostic-display.component.html',
  styleUrls: ['./diagnostic-display.component.css']
})
export class DiagnosticDisplayComponent implements OnInit {
  @Input()
  diagnostic: Diagnostic;

  constructor() {}

  ngOnInit() {}
}

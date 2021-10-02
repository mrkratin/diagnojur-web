import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'dj-diagnostic-answer-confirm',
  templateUrl: './diagnostic-answer-confirm.component.html',
  styleUrls: ['./diagnostic-answer-confirm.component.css']
})
export class DiagnosticAnswerConfirmComponent implements OnInit {
  constructor(public nzModalRef: NzModalRef) {}

  ngOnInit() {}
}

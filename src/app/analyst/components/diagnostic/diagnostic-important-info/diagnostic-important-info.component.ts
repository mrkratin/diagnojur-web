import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'dj-diagnostic-important-info',
  templateUrl: './diagnostic-important-info.component.html',
  styleUrls: ['./diagnostic-important-info.component.css']
})
export class DiagnosticImportantInfoComponent {
  constructor(public nzModalRef: NzModalRef) {}
}

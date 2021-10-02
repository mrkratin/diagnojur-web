import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiagnosticAvailabilityService } from '../../../services';
import { NzModalService } from 'ng-zorro-antd';
import { DiagnosticPending } from '../../../models';

@Component({
  selector: 'dj-diagnostic-next',
  templateUrl: './diagnostic-next.component.html',
  styleUrls: ['./diagnostic-next.component.css']
})
export class DiagnosticNextComponent implements OnInit {
  @Input()
  replyPending: boolean;
  @Output()
  emitterDiagnostic: EventEmitter<DiagnosticPending> = new EventEmitter();
  isLoading = false;

  constructor(private service: DiagnosticAvailabilityService, private modalService: NzModalService) {}

  ngOnInit() {}

  nextDiagnosis() {
    this.isLoading = true;
    this.service.nextDiagnosis().subscribe(
      response => {
        this.isLoading = false;
        this.emitterDiagnostic.emit(response.data);
        this.openNextSuccessfully();
      },
      () => (this.isLoading = false)
    );
  }

  private openNextSuccessfully() {
    this.modalService.success({
      nzTitle: 'Diagnóstico recebido',
      nzContent:
        'Caro analista, você acaba de receber uma solicitação de diagnóstico, analise os autos e a movimentação processual ' +
        'para produzí-lo.',
      nzOkText: 'Fechar'
    });
  }
}

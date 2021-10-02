import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { Evaluation, Solicitation, SolicitationReply, SolicitationStatusEnum } from '../../models';
import { SolicitationService } from '../../services';
import { SolicitationTimelineComponent } from '../solicitation-timeline';
import { saveAs } from 'file-saver/dist/FileSaver';
import { EvaluateDiagnosisComponent } from './evaluate-diagnosis';
import { SolicitationReplyComponent } from './solicitation-reply';

@Component({
  selector: 'dj-solicitation',
  templateUrl: './solicitation.component.html',
  styleUrls: ['./solicitation.component.css']
})
export class SolicitationComponent implements OnInit {
  id: number;
  solicitation: Solicitation;
  nzModalRef: NzModalRef;
  isDownloading: boolean;
  isEvaluating: boolean;
  isReply: boolean;
  evaluateEmitter: EventEmitter<Evaluation>;
  replyEmitter: EventEmitter<SolicitationReply>;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private service: SolicitationService,
    private modalService: NzModalService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.isDownloading = false;
    this.isEvaluating = false;
    this.isReply = false;
    this.evaluateEmitter = new EventEmitter();
    this.replyEmitter = new EventEmitter();
    this.initSolicitation();
  }

  onBack() {
    this.location.back();
  }

  evaluate() {
    this.evaluateEmitter.subscribe(evaluation => {
      this.solicitation.diagnosis.evaluation = evaluation;
      this.solicitation.status = SolicitationStatusEnum.FINALIZED;
    });
    this.nzModalRef = this.modalService.create({
      nzTitle: 'Tem um tempinho?',
      nzContent: EvaluateDiagnosisComponent,
      nzComponentParams: {
        diagnosis: this.solicitation.diagnosis,
        isLoading: this.isEvaluating,
        emitter: this.evaluateEmitter
      },
      nzFooter: [
        {
          label: 'Mais tarde',
          onClick: (instance: EvaluateDiagnosisComponent) => instance.nzModalRef.destroy(),
          type: 'default'
        },
        {
          label: 'Avaliar',
          disabled: (instance: EvaluateDiagnosisComponent) => instance.formGroup.invalid,
          onClick: (instance: EvaluateDiagnosisComponent) => instance.evaluateDiagnosis(),
          type: 'primary'
        }
      ]
    });
  }

  get showDiagnosis(): boolean {
    return this.solicitation
      ? this.solicitation.status === SolicitationStatusEnum.FINALIZED ||
          this.solicitation.status === SolicitationStatusEnum.DIAGNOSTIC_PROVIDED ||
          this.solicitation.status === SolicitationStatusEnum.PENDING_REPLY ||
          this.solicitation.status === SolicitationStatusEnum.REPLY_PROVIDED
      : false;
  }

  download() {
    if (!this.isDownloading) {
      this.isDownloading = true;
      this.service.download(this.solicitation).subscribe(
        data => {
          const blob: Blob = new Blob([data.body], { type: data.body.type });
          const url = window.URL.createObjectURL(blob);
          saveAs(blob, 'report_diagnosis' + this.solicitation.diagnosis.id + '.pdf');
          window.open(url);
          this.isDownloading = false;
        },
        error => {
          this.isDownloading = false;
        }
      );
    }
  }

  reply() {
    this.replyEmitter.subscribe(solicitationReply => {
      this.solicitation.diagnosis.solicitationReply = solicitationReply;
      this.solicitation.status = SolicitationStatusEnum.PENDING_REPLY;
    });
    this.nzModalRef = this.modalService.create({
      nzTitle: 'Solicitar réplica',
      nzContent: SolicitationReplyComponent,
      nzComponentParams: {
        diagnosis: this.solicitation.diagnosis,
        isLoading: this.isReply,
        emitter: this.replyEmitter
      },
      nzOkLoading: this.isReply,
      nzOkText: 'Solicitar',
      nzOnOk: instance => instance.solicitationReply(),
      nzCancelText: 'Cancelar',
      nzOnCancel: instance => instance.nzModalRef.close()
    });
  }

  private initSolicitation() {
    this.service.findById(this.id).subscribe(
      response => {
        this.solicitation = response.data;
      },
      error => console.error(error)
    );
  }

  get showBtnDownload(): boolean {
    return (
      this.solicitation.status === SolicitationStatusEnum.REPLY_PROVIDED ||
      this.solicitation.status === SolicitationStatusEnum.PENDING_REPLY ||
      this.solicitation.status === SolicitationStatusEnum.DIAGNOSTIC_PROVIDED ||
      this.solicitation.status === SolicitationStatusEnum.FINALIZED
    );
  }

  get showBtnEvaluate(): boolean {
    return (
      this.solicitation.status === SolicitationStatusEnum.REPLY_PROVIDED ||
      this.solicitation.status === SolicitationStatusEnum.DIAGNOSTIC_PROVIDED
    );
  }

  get showBtnReply(): boolean {
    return this.solicitation.status === SolicitationStatusEnum.DIAGNOSTIC_PROVIDED;
  }

  showTimeline() {
    this.nzModalRef = this.modalService.create({
      nzTitle: 'Linha do Tempo e evolução da Solicitação ' + this.solicitation.id,
      nzContent: SolicitationTimelineComponent,
      nzComponentParams: {
        solicitationId: this.solicitation.id
      },
      nzFooter: [
        {
          label: 'Fechar',
          type: 'primary',
          onClick: (timeline: SolicitationTimelineComponent) => {
            timeline.nzModalRef.destroy();
          }
        }
      ]
    });
  }
}

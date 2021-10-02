import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { DiagnosisService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService, NzModalRef, NzModalService } from 'ng-zorro-antd';
import {
  DiagnosisStatusEnum,
  Diagnostic,
  Part,
  ProcessEvent,
} from '../../models';
import { DiagnosticImportantInfoComponent } from './diagnostic-important-info';
import { DiagnosticAnswerComponent } from './diagnostic-answer';
import {
  PartPoloEnum,
  SolicitationReplyStatusEnum,
} from '../../../shared/models';
import { DiagnosticAnswerConfirmComponent } from './diagnostic-answer-confirm';
import { SolicitationReplyAnswerComponent } from './solicitation-reply-answer';

@Component({
  selector: 'dj-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css'],
})
export class DiagnosticComponent implements OnInit {
  id: number;
  diagnostic: Diagnostic;
  nzModalRef: NzModalRef;
  @ViewChild(DiagnosticAnswerComponent, { static: false })
  diagnosticAnswer: DiagnosticAnswerComponent;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private service: DiagnosisService,
    private modalService: NzModalService,
    private location: Location,
    private messageService: NzMessageService
  ) {}

  get showAnswerReplyBtn(): boolean {
    return this.diagnostic
      ? this.diagnostic.solicitationReply &&
          this.diagnostic.solicitationReply.status ===
            SolicitationReplyStatusEnum.PENDING
      : false;
  }

  onBack() {
    this.location.back();
  }

  answerDiagnosticConfirm() {
    const formValid = this.partsOk && this.pEventsOk && this.pInformationOk;

    if (!formValid) {
      this.messageService.warning(
        'Alguns campos não foram preenchidos. Verifique o diagnóstico e tente novamente'
      );
      return;
    }

    this.nzModalRef = this.modalService.confirm({
      nzTitle: 'Confirmação',
      nzContent: DiagnosticAnswerConfirmComponent,
      nzOkText: 'Confirmar',
      nzOkType: 'danger',
      nzCancelText: 'Revisar Diagnóstico',
      nzOnOk: (component: DiagnosticAnswerConfirmComponent) => {
        component.nzModalRef.destroy();
        this.answerDiagnostic();
      },
    });
  }

  answerDiagnostic() {
    this.isLoading = true;
    this.service.answer(this.diagnostic.id).subscribe(
      () => {
        this.isLoading = false;
        this.messageService.success('Diagnóstico finalizado com sucesso');
        this.location.back();
      },
      () => (this.isLoading = false)
    );
  }

  answerReply() {
    if (this.diagnostic && this.diagnostic.solicitationReply) {
      this.nzModalRef = this.modalService.create({
        nzTitle: 'Responder Réplica',
        nzContent: SolicitationReplyAnswerComponent,
        nzComponentParams: {
          solicitationReply: this.diagnostic.solicitationReply,
        },
        nzFooter: [
          {
            label: 'Cancelar',
            type: 'default',
            onClick: (component: SolicitationReplyAnswerComponent) =>
              component.nzModalRef.destroy(),
            disabled: (component: SolicitationReplyAnswerComponent) =>
              component.disabledCancelBtn,
          },
          {
            label: 'Confirmar',
            type: 'danger',
            loading: (component: SolicitationReplyAnswerComponent) =>
              component.isLoading,
            onClick: (component: SolicitationReplyAnswerComponent) =>
              component.answer(),
            disabled: (component: SolicitationReplyAnswerComponent) =>
              component.disabledOkBtn,
          },
        ],
      });
    }
  }

  get pInformationOk(): boolean {
    if (this.diagnosticAnswer) {
      if (this.diagnosticAnswer.formGroup) {
        const fg = this.diagnosticAnswer.aboutFormGroup;
        return fg.valid && fg.value.id;
      }
    } else {
      return false;
    }
  }

  get partsOk(): boolean {
    if (this.diagnosticAnswer) {
      if (this.diagnosticAnswer.formGroup) {
        const p: Part[] = this.diagnosticAnswer.formGroup.controls.parts.value;
        return p.length >= 2 ? this.checkTypePart(p) : false;
      }
    } else {
      return false;
    }
  }

  private checkTypePart(p: Part[]) {
    let i = 0;
    let j = 0;
    for (const part of p) {
      if (part.id !== null) {
        if (part.polo === PartPoloEnum.ACTIVE) {
          i++;
        } else {
          j++;
        }
      }
    }
    return p.length === 2 ? i === 1 && j === 1 : true;
  }

  get pEventsOk(): boolean {
    if (this.diagnosticAnswer) {
      if (this.diagnosticAnswer.formGroup) {
        const p: ProcessEvent[] = this.diagnosticAnswer.formGroup.controls
          .processEvents.value;
        return p.length === 1 ? p[0].id !== null : true;
      }
    } else {
      return false;
    }
  }

  get showAnswerBtn(): boolean {
    return this.diagnostic
      ? this.diagnostic.status === DiagnosisStatusEnum.ANALYZING ||
          this.diagnostic.status === DiagnosisStatusEnum.NEW
      : false;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.service.findById(this.id).subscribe((response) => {
      this.diagnostic = response.data;
      // this.showInto();
    });
  }

  get completed(): boolean {
    return this.diagnostic
      ? this.diagnostic.status === DiagnosisStatusEnum.COMPLETED
      : false;
  }

  private showInto() {
    if (this.diagnostic.status !== DiagnosisStatusEnum.COMPLETED) {
      this.nzModalRef = this.modalService.info({
        nzTitle: 'Informações Importantes',
        nzContent: DiagnosticImportantInfoComponent,
        nzOkText: 'Fechar',
      });
      this.nzModalRef.afterClose.subscribe(() => {
        this.nzModalRef = this.modalService.info({
          nzTitle: 'Informações do Diagnóstico',
          nzContent:
            '<div class="pt-3">' +
            '<p class="text-justify">' +
            'Caro analista, verifique as informações alimentadas pelo solicitante, se correspondem as ' +
            'informações do processo realizando as correções com relação ao grau, local e acrescentando nome do juiz ou ' +
            'julgador responsável, Órgão onde tramita o processo( Que são as varas, Juntas, Turmas, Câmaras, etc ) Mas ' +
            'que deve ser escrito pelo advogado' +
            '</p>' +
            '</div>',
          nzOkText: 'Fechar',
        });
      });
    }
  }
}

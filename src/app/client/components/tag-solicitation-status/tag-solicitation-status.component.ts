import { Component, Input, OnInit } from '@angular/core';
import { SolicitationStatusEnum } from '../../models';
import { NzModalService } from 'ng-zorro-antd';
import { SolicitationStatusPipe } from '../../pipes';

@Component({
  selector: 'dj-tag-solicitation-status',
  templateUrl: './tag-solicitation-status.component.html',
  styleUrls: ['./tag-solicitation-status.component.css']
})
export class TagSolicitationStatusComponent implements OnInit {
  @Input()
  solicitation: any;

  constructor(private modalService: NzModalService, private pipe: SolicitationStatusPipe) {}

  showInfo() {
    const { status } = this.solicitation;
    let title: string;
    let message: string;
    if (this.solicitation.status === SolicitationStatusEnum.PENDING_PAYMENT) {
      message =
        'Estamos aguardando apenas a confirmação do seu pagamento, fique tranquilo(a) a depender da forma pode levar alguns minutos a 2 dias para compensação.';
      title = 'Pendente pagamento';
    } else if (status === SolicitationStatusEnum.PENDING_ANALYST) {
      message = 'Em breve um analista dará inicio ao diagnóstico do seu processo.';
      title = 'Aguardando Analista';
    } else if (status === SolicitationStatusEnum.PENDING_DIAGNOSIS) {
      message =
        'Fique tranquilo, você já está em boas mãos, um analista já está preparando o diagnóstico do seu processo.';
      title = 'Aguardando Diagnóstico';
    } else if (status === SolicitationStatusEnum.DIAGNOSTIC_PROVIDED) {
      message = 'Um diagnostico foi concluído por um analista, o que achou?';
      title = 'Diagnóstico Fornecido';
    } else if (status === SolicitationStatusEnum.PENDING_REPLY) {
      message =
        'Parece que alguma dúvida ficou pendente e foi solicitado uma réplica, aguarde que em breve o analista irá responder.';
      title = 'Aguardando Réplica';
    } else if (status === SolicitationStatusEnum.REPLY_PROVIDED) {
      message = 'Sua réplica foi fornecida pelo analista, esperamos que tenha ficado satisfeito com o resultado!';
      title = 'Réplica Fornecida';
    } else if (status === SolicitationStatusEnum.FINALIZED) {
      message = 'Diagnóstico finalizado e/ou avaliado com sucesso!';
      title = 'Finalizado (réplica e/ou avaliado)';
    } else if (status === SolicitationStatusEnum.CANCELED) {
      message =
        'Diagnostico Cancelado, infelizmente não conseguimos identificar o pagamento dentro do prazo, caso tenha interesse basta solicitar um novo e efetuar pagamento.';
      title = 'Cancelado';
    }
    if (title && message) {
      return this.modalService.info({
        nzTitle: title,
        nzContent: `<p>${message}</p>`
      });
    }
  }

  get class(): string {
    if (this.solicitation.status === SolicitationStatusEnum.FINALIZED) {
      return 'b-bg-success text-white';
    } else if (this.solicitation.status === SolicitationStatusEnum.CANCELED) {
      return 'b-bg-danger text-white';
    } else if (this.solicitation.status === SolicitationStatusEnum.REPLY_PROVIDED) {
      return 'b-bg-primary text-white';
    } else if (this.solicitation.status === SolicitationStatusEnum.DIAGNOSTIC_PROVIDED) {
      return 'b-bg-primary text-white';
    } else if (this.solicitation.status === SolicitationStatusEnum.PENDING_DIAGNOSIS) {
      return 'b-bg-warming text-dark';
    } else if (this.solicitation.status === SolicitationStatusEnum.PENDING_REPLY) {
      return 'b-bg-warming text-dark';
    } else if (this.solicitation.status === SolicitationStatusEnum.PENDING_ANALYST) {
      return 'b-bg-info text-white';
    } else if (this.solicitation.status === SolicitationStatusEnum.PENDING_PAYMENT) {
      return 'b-bg-secondary text-white';
    } else {
      return 'b-bg-danger text-white';
    }
  }

  get color(): string {
    if (this.solicitation.status === SolicitationStatusEnum.FINALIZED) {
      return '#28a745';
    } else if (this.solicitation.status === SolicitationStatusEnum.CANCELED) {
      return '#dc3545';
    } else if (this.solicitation.status === SolicitationStatusEnum.REPLY_PROVIDED) {
      return '#007bff';
    } else if (this.solicitation.status === SolicitationStatusEnum.DIAGNOSTIC_PROVIDED) {
      return '#007bff';
    } else if (this.solicitation.status === SolicitationStatusEnum.PENDING_DIAGNOSIS) {
      return '#ffc107';
    } else if (this.solicitation.status === SolicitationStatusEnum.PENDING_REPLY) {
      return '#ffc107';
    } else if (this.solicitation.status === SolicitationStatusEnum.PENDING_ANALYST) {
      return '#17a2b8';
    } else if (this.solicitation.status === SolicitationStatusEnum.PENDING_PAYMENT) {
      return '#6c757d';
    } else {
      return '#dc3545';
    }
  }

  ngOnInit() {}
}

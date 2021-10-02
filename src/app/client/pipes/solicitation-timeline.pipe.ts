import { Pipe, PipeTransform } from '@angular/core';
import { SolicitationStatusEnum } from '../models';

@Pipe({
  name: 'solicitationTimeline'
})
export class SolicitationTimelinePipe implements PipeTransform {
  transform(value: SolicitationStatusEnum, args?: any): any {
    if (value === SolicitationStatusEnum.CANCELED) {
      return 'Diagnóstico cancelado';
    } else if (value === SolicitationStatusEnum.PENDING_PAYMENT) {
      return 'Diagnóstico solicitado';
    } else if (value === SolicitationStatusEnum.PENDING_ANALYST) {
      return 'Pagamento confirmado';
    } else if (value === SolicitationStatusEnum.PENDING_DIAGNOSIS) {
      return 'Analista alocado';
    } else if (value === SolicitationStatusEnum.DIAGNOSTIC_PROVIDED) {
      return 'Diagnóstico concluído';
    } else if (value === SolicitationStatusEnum.PENDING_REPLY) {
      return 'Réplica solicitada';
    } else if (value === SolicitationStatusEnum.REPLY_PROVIDED) {
      return 'Réplica fornecida';
    } else if (value === SolicitationStatusEnum.FINALIZED) {
      return 'Finalizado';
    }
    return value;
  }
}

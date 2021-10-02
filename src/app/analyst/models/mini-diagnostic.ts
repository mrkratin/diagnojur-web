import { SolicitationTypeEnum } from '../../shared/models';
import { DiagnosisStatusEnum } from './diagnosis-status';

export interface MiniDiagnostic {
  id: number;
  type: SolicitationTypeEnum;
  status: DiagnosisStatusEnum;
  solicitationReply: boolean;
}

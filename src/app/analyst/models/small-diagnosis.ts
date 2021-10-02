import { SolicitationSpecificTypeEnum, SolicitationTypeEnum } from '../../shared/models';
import { DiagnosisStatusEnum } from './diagnosis-status';
import { SmallSolicitationReply } from './small-solicitation-reply';

export interface SmallDiagnosis {
  id: number;
  type: SolicitationTypeEnum;
  specificType: SolicitationSpecificTypeEnum;
  processNumber: string;
  status: DiagnosisStatusEnum;
  dateDraw: Date;
  deadLine: Date;
  dateDiagnosis: Date;
  evaluated: boolean;
  received: boolean;
  solicitationReply: SmallSolicitationReply;
}

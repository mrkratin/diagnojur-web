import { ProcessEvent } from './process-event';
import { Part } from './part';
import { Solicitation } from './solicitation';
import { Evaluation } from './evaluation';
import { SolicitationReply } from './solicitation-reply';
import { DiagnosisStatusEnum } from './diagnosis-status';
import { ProceduralInformation } from '../../shared/models';

export interface Diagnostic {
  id: number;
  parts: Part[];
  processEvents: ProcessEvent[];
  responseDate: Date;
  solicitationReply: SolicitationReply;
  evaluation: Evaluation;
  dateDraw: Date;
  deadLine: Date;
  status: DiagnosisStatusEnum;
  timeLeft: number;
  solicitation: Solicitation;
  proceduralInformation: ProceduralInformation;
}

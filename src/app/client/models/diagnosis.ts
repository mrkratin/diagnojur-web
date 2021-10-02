import { Evaluation } from './evaluation';
import { Part } from './part';
import { ProcessEvent } from './process-event';
import { SolicitationReply } from './solicitation-reply';
import { ProceduralInformation } from './procedural-information';

export interface Diagnosis {
  id: number;
  parts: Part[];
  processEvents: ProcessEvent[];
  responseDate: Date;
  solicitationReply: SolicitationReply;
  evaluation: Evaluation;
  proceduralInformation: ProceduralInformation;
}

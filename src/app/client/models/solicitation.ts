import { SolicitationSpecificTypeEnum, SolicitationTypeEnum } from '../../shared/models';
import { SolicitationStatusEnum } from './solicitation-status';
import { Diagnosis } from './diagnosis';
import { Process } from './process';
import { Payment } from './payment';

export interface Solicitation {
  id: number;
  type: SolicitationTypeEnum;
  specificType: SolicitationSpecificTypeEnum;
  process: Process;
  status: SolicitationStatusEnum;
  payment: Payment;
  diagnosis: Diagnosis;
  solicitationDate: Date;
}

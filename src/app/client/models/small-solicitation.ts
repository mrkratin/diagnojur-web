import { SolicitationStatusEnum } from './solicitation-status';
import { SolicitationSpecificTypeEnum } from '../../shared/models';

export interface SmallSolicitation {
  id: number;
  processNumber: string;
  type: string;
  specificType: SolicitationSpecificTypeEnum;
  status: SolicitationStatusEnum;
  date: Date;
  diagnosis: number;
}

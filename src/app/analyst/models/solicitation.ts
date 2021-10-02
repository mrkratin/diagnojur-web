import { SolicitationSpecificTypeEnum, SolicitationTypeEnum } from '../../shared/models';
import { Process } from './process';

export interface Solicitation {
  id: number;
  type: SolicitationTypeEnum;
  specificType: SolicitationSpecificTypeEnum;
  process: Process;
}

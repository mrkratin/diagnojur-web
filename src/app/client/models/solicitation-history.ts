import { SolicitationStatusEnum } from './solicitation-status';

export interface SolicitationHistory {
  id: number;
  previous: SolicitationStatusEnum;
  next: SolicitationStatusEnum;
  date: Date;
}

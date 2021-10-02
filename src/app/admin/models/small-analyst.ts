import { AnalystStatusEnum } from './analyst-status';

export interface SmallAnalyst {
  id: number;
  name: string;
  status: AnalystStatusEnum;
  date: Date;
}

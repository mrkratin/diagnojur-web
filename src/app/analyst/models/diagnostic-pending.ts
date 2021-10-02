import { DiagnosisStatusEnum } from './diagnosis-status';

export interface DiagnosticPending {
  id: number;
  type: string;
  processNumber: string;
  status: DiagnosisStatusEnum;
  timeLeft: string;
  deadLine: Date;
}

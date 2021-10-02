import { ReplyReasonEnum, SolicitationReplyStatusEnum } from '../../shared/models';

export interface SolicitationReplyPending {
  id: number;
  diagnosisId: number;
  description: string;
  reason: ReplyReasonEnum;
  status: SolicitationReplyStatusEnum;
  date: Date;
}

import { ReplyReasonEnum, SolicitationReplyStatusEnum } from '../../shared/models';

export interface SmallSolicitationReply {
  id: number;
  status: SolicitationReplyStatusEnum;
  reason: ReplyReasonEnum;
  dateReply: Date;
  dateSolicitation: Date;
}

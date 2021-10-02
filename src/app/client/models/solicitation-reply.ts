import { ReplyReasonEnum, SolicitationReplyStatusEnum } from '../../shared/models';
import { Reply } from './reply';

export interface SolicitationReply {
  id: number;
  reason: ReplyReasonEnum;
  reply: Reply;
  description: string;
  status: SolicitationReplyStatusEnum;
  creationDate: Date;
}

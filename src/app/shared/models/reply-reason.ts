export enum ReplyReasonEnum {
  DOUBT = 'DOUBT',
  LANGUAGE = 'LANGUAGE'
}

export interface ReplyReason {
  code: number;
  value: ReplyReasonEnum;
  description: string;
}

export const replyReasons: ReplyReason[] = [
  { code: 0, description: 'Dúvidas', value: ReplyReasonEnum.DOUBT },
  { code: 1, description: 'Linguagem/Juridiquês', value: ReplyReasonEnum.LANGUAGE }
];

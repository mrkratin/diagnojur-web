import { OAB } from './oab';
import { AnalystStatusEnum } from '../../admin/models/analyst-status';
import { Document } from '../../admin/models/document';
import { BankAccount } from './bank-account';
import { ProcessTypeEnum } from './process-type';

export interface Analyst {
  id: number;
  oab: OAB;
  status: AnalystStatusEnum;
  documents: Document[];
  bankAccount: BankAccount;
  vip: boolean;
  score: number;
  specialties: ProcessTypeEnum[];
  creationDate: Date;
}

import { OAB, ProcessTypeEnum, Telephone } from '../../shared/models';
import { DocumentCreate } from './document-create';
import { BankAccountCreate } from './bank-account-create';
import { CreateTelephone } from 'src/app/auth/models';

export interface AnalystCreate {
  name: string;
  oab: OAB;
  documents: DocumentCreate[];
  specialties: ProcessTypeEnum[];
  bankAccount: BankAccountCreate;
  telephones: CreateTelephone[];
}

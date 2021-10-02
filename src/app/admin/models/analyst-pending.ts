import { OAB, Person, ProcessTypeEnum } from '../../shared/models';
import { AnalystStatusEnum } from './analyst-status';
import { Document } from './document';

export interface AnalystPending {
  id: number;
  person: Person;
  oab: OAB;
  vip: boolean;
  score: number;
  status: AnalystStatusEnum;
  specialties: ProcessTypeEnum[];
  documents: Document[];
}

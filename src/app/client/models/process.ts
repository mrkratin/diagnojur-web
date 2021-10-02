import {
  City,
  JusticeTypeEnum,
  OAB,
  ProcessTypeEnum
} from '../../shared/models';

export interface Process {
  id: number;
  type: ProcessTypeEnum;
  justiceType: JusticeTypeEnum;
  processNumber: string;
  withLawyer: boolean;
  oab: OAB;
  confidentialProcess: boolean;
  justiceSecret: string;
  county: City;
}

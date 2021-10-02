import {
  County,
  OAB,
  ProcessDegreeEnum,
  ProcessOrganEnum,
  ProcessTypeEnum,
  JusticeTypeEnum
} from '../../shared/models';

export interface Process {
  id: number;
  type: ProcessTypeEnum;
  organ: ProcessOrganEnum;
  degree: ProcessDegreeEnum;
  justiceType: JusticeTypeEnum;
  processNumber: string;
  withLawyer: boolean;
  oab: OAB;
  confidentialProcess: boolean;
  justiceSecret: string;
  county: County;
}

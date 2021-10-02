import { OAB } from '../../shared/models';

export interface ProcessCreate {
  county: number;
  type: string;
  justiceType: string;
  processNumber: string;
  withLawyer: boolean;
  oab: OAB;
  confidentialProcess: boolean;
  justiceSecret: string;
}

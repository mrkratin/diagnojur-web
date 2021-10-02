import { OAB } from '../../shared/models';

export interface PartCreate {
  diagnosisId: number;
  name: string;
  type: string;
  polo: string;
  oab: OAB;
}

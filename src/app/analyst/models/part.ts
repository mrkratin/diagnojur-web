import { OAB, PartPoloEnum, PartTypeEnum } from '../../shared/models';

export interface Part {
  id: string;
  name: string;
  type: PartTypeEnum;
  polo: PartPoloEnum;
  oab: OAB;
}

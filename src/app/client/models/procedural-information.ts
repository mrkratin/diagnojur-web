import {
  ProcessOrganEnum,
  ProcessResourceTypeEnum,
  ProcessDegreeEnum
} from '../../shared';

export interface ProceduralInformation {
  id: number;
  processingOrgan: string;
  judgesName: string;
  resource: ProcessResourceTypeEnum;
  degree: ProcessDegreeEnum;
  organ: ProcessOrganEnum;
  creationDate: Date;
  updateDate: Date;
}

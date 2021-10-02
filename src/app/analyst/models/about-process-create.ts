import { ProcessDegreeEnum, ProcessOrganEnum, ProcessResourceTypeEnum } from '../../shared/models';

export interface AboutProcessCreate {
  diagnosis: number;
  processingOrgan: string;
  judgesName: string;
  resource: ProcessResourceTypeEnum;
  degree: ProcessDegreeEnum;
  organ: ProcessOrganEnum;
}

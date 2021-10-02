import { ProcessDegreeEnum, ProcessOrganEnum, ProcessResourceTypeEnum } from '.';

export interface ProceduralInformation {
  id: number;
  processingOrgan: string;
  judgesName: string;
  resource: ProcessResourceTypeEnum;
  degree: ProcessDegreeEnum;
  organ: ProcessOrganEnum;
}

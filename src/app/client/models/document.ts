import { DocumentStatusEnum } from './document-status';
import { DocumentTypeEnum } from './document-type';
import { DocumentDeniedTypeEnum } from './document-denied-type';

export interface Document {
  id: number;
  secretKey: string;
  status: DocumentStatusEnum;
  type: DocumentTypeEnum;
  deniedType: DocumentDeniedTypeEnum;
  url: string;
  creationDate: Date;
  updateDate: Date;
}

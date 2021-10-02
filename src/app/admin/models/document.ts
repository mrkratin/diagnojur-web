import { DocumentStatusEnum } from './document-status';
import { DocumentTypeEnum } from '../../client/models';

export interface Document {
  id: number;
  secretKey: string;
  url: string;
  status: DocumentStatusEnum;
  type: DocumentTypeEnum;
  updateDate: Date;
}

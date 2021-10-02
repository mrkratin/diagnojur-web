import { DocumentTypeEnum } from './document-type';

export interface DocumentCreate {
  secretKey: string;
  type: DocumentTypeEnum;
}

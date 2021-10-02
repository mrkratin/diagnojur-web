export enum DocumentTypeEnum {
  OFFICIAL = 'OFFICIAL',
  OAB = 'OAB',
  OAB_VERSO = 'OAB_VERSO',
  ADDRESS = 'ADDRESS',
  PHOTO = 'PHOTO'
}

export interface DocumentType {
  code: number;
  value: DocumentTypeEnum;
  description: string;
}

export const documentTypes: DocumentType[] = [
  { code: 0, value: DocumentTypeEnum.OFFICIAL, description: 'Documento Oficial com foto' },
  { code: 1, value: DocumentTypeEnum.OAB, description: 'Carteira da OAB' },
  { code: 2, value: DocumentTypeEnum.OAB_VERSO, description: 'Carteira da OAB - Verso' },
  { code: 3, value: DocumentTypeEnum.ADDRESS, description: 'Comprovante de Endereço' },
  { code: 4, value: DocumentTypeEnum.PHOTO, description: 'Foto' }
];

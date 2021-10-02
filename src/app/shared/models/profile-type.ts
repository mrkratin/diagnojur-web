export enum ProfileTypeEnum {
  ROLE_CLIENT = 'ROLE_CLIENT',
  ROLE_ANALYST = 'ROLE_ANALYST',
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_ROOT = 'ROLE_ROOT'
}

export interface ProfileType {
  code: number;
  value: ProfileTypeEnum;
  description: string;
}

export const profilesType: ProfileType[] = [
  { code: 0, value: ProfileTypeEnum.ROLE_CLIENT, description: 'Cliente' },
  { code: 1, value: ProfileTypeEnum.ROLE_ANALYST, description: 'Analista' },
  { code: 2, value: ProfileTypeEnum.ROLE_ADMIN, description: 'Administrador' },
  { code: 3, value: ProfileTypeEnum.ROLE_ROOT, description: 'Super Administrador' }
];

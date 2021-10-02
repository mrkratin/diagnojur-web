import { Address, Analyst, ProfileTypeEnum, Telephone, Wallet } from '../../shared/models';

export interface Profile {
  id: number;
  name: string;
  email: string;
  cpf: string;
  rg: string;
  dateBirth: Date;
  roles: ProfileTypeEnum[];
  registry: string;
  wallet: Wallet;
  address: Address;
  telephones: Telephone[];
  analyst: Analyst;
}

export interface UpdatePersonAdmin {
  id: number;
  email: string;
  password: string;
  cpf: string;
  rg: string;
  registry: number;
  dateBirth: Date;
  wallet: number;
  roleAdministrator: boolean;
  roleRoot: boolean;
}

import { CreateAddress } from './create-address';
import { CreateTelephone } from './create-telephone';

export interface CreatePerson {
  name: string;
  email: string;
  password: string;
  cpf: string;
  dateBirth: string;
  indicator: string;
}

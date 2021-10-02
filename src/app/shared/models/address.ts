import { City } from './city';

export interface Address {
  id: number;
  cep: string;
  district: string;
  street: string;
  complement: string;
  number: number;
  city: City;
}

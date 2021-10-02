import { Bank } from './bank';

export interface BankAccount {
  id: number;
  agency: string;
  account: string;
  digit: string;
  bank: Bank;
}

import { BankAccount } from '../../shared/models';
import { TransferRequestAvailabilityStatusEnum } from './transfer-request-availability-status';

export interface TransferRequestAvailability {
  id: number;
  requestedValue: string;
  status: TransferRequestAvailabilityStatusEnum;
  bankAccount: BankAccount;
  analyst: number;
  requestDate: Date;
}

import { TransferRequestStatusEnum } from './transfer-request-status';

export interface TransferRequest {
  id: number;
  requestedValue: number;
  status: TransferRequestStatusEnum;
  deniedType: string;
  requestDate: string;
}

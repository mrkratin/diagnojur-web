import { ProcessCreate } from './process-create';
import { PaymentCreate } from './payment-create';
import { SolicitationSpecificTypeEnum, SolicitationTypeEnum } from '../../shared/models';

export interface SolicitationCreate {
  type: SolicitationTypeEnum;
  specificType: SolicitationSpecificTypeEnum;
  process: ProcessCreate;
  payment: PaymentCreate;
}

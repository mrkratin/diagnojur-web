import { ProfileTypeEnum } from '../../shared/models';

export interface SmallPerson {
  id: number;
  email: string;
  name: string;
  registry: string;
  roles: ProfileTypeEnum[];
}

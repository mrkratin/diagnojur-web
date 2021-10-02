import { StandardError } from './standard-error';

export interface Response<T> {
  data: T;
  errors: StandardError[];
}

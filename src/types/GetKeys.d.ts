import { Key } from './Key';

export interface GetKeysResponse {
  pagination: {
    page: number;
    pageSize: number;
  };
  results: Key[];
}

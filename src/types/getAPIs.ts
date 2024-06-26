import { GetAPIResponse } from './GetAPI';

export interface GetAPIsResponse {
  pagination: {
    page: number;
    pageSize: number;
  };
  results: GetAPIResponse[];
}

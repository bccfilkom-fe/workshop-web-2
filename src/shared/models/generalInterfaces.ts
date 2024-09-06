export interface IGeneralAPIResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export interface IMteaData {
  current_page: number;
  from: number;
  path: string;
  per_page: number;
  to: number;
  terms: string;
  info: string;
}

export interface ILinkResponse {
  first: string;
  last: string;
  prev: string;
  next: string;
}

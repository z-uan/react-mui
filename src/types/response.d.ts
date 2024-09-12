declare type RecordType = { [K: string]: string | unknown };

declare interface DataResponse<T = never> {
  errors?: RecordType | string;
  message?: string;
  status?: number;
  code?: string;
  data?: T;
}

declare type PaginateDataResponse<T> = DataResponse<{
  results: T;
  count: number;
  next_page: number;
}>;

declare interface PaginateRequest<T> extends T {
  page: number;
  page_size: number;
}

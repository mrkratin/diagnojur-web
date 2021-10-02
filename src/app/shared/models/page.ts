export interface Page<T> {
  content: T[];
  pageable: {
    pageSize: number;
    pageNumber: number;
  };
  last: boolean;
  first: boolean;
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
  size: number;
  number: number;
}

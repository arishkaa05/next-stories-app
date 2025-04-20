import { PaginationDto } from '@/shared/types/pagination';

export function createEmptyList<T>(): PaginationDto<T> {
  return {
    links: {
      first: '',
    },
    meta: {
      currentPage: 0,
      itemCount: 0,
      itemsPerPage: 0,
      totalItems: 0,
      totalPages: 0,
    },
    items: [],
  };
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class PaginationService<T> {
  paginate(
    items: T[],
    page: number,
    limit: number,
  ): { items: T[]; currentPage: number; count: number; totalPage: number } {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const itemsOnPage = items.slice(startIndex, endIndex);
    const totalCount = items.length;
    const totalPages = Math.ceil(totalCount / limit);

    return {
      items: itemsOnPage,
      currentPage: page,
      totalPage: totalPages,
      count: totalCount,
    };
  }
}

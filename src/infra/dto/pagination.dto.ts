export class PaginationUtil {
  static paginate(queryBuilder, options) {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    queryBuilder.offset(skip);
    queryBuilder.limit(limit);
  }
}
// pagination.dto.ts
import { IsOptional, IsNumber, Min, Max, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(100)
  limit: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  page: number;
}

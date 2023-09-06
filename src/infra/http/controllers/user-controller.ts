import { CreatedUser } from '@usecase/user/createUser/created-user';
import { CreateUserBody } from '@infra/dto/create-users-body';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserViewModel } from '../view-models/users-views-model';
import { FindAllUsers } from 'src/usecase/user/findAllUser/findAll.user';
import { Users } from '@domain/users/entity/user';
import { PaginationDto } from '@infra/dto/pagination.dto';
import { PaginationService } from 'src/common/pagination/paginationService';

@Controller('users')
export class UserController {
  constructor(
    private createdUser: CreatedUser,
    private findAllUsers: FindAllUsers,
    private readonly paginationService: PaginationService<Users>,
  ) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { fullname, role, cpf, cnpj, email, password } = body;

    const { user } = await this.createdUser.execute({
      fullname,
      role,
      cpf,
      cnpj,
      email,
      password,
    });

    const viewFront = UserViewModel.toHTTP(user);

    return { viewFront };
  }

  @Get('allUsers')
  async getFromUsers(@Query() paginationDto: PaginationDto): Promise<{
    currentPage: number;
    totalPage: number;
    count: number;
  }> {
    const { page, limit } = paginationDto;

    if (page <= 0 || limit <= 0) {
      throw new Error(
        'Valores de "page" e "limit" devem ser maiores que zero.',
      );
    }

    const findUsers = await this.findAllUsers.execute();

    const result = this.paginationService.paginate(findUsers, page, limit);

    return result;
  }
}

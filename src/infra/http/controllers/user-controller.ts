import { CreatedUser } from '@domain/usecase/createUser/created-user';
import { CreateUserBody } from '@infra/dto/create-users-body';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserViewModel } from '../view-models/users-views-model';
import { ListAllUsers } from '@domain/usecase/listAllUser/listAll-user';
import { Users } from '@domain/entity/user';
import { PaginationDto } from '@infra/dto/pagination.dto';
import { PaginationService } from 'src/common/pagination/paginationService';

@Controller('users')
export class UserController {
  constructor(
    private createdUser: CreatedUser,
    private listAllUsers: ListAllUsers,
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

    // Validação dos parâmetros
    if (page <= 0 || limit <= 0) {
      throw new Error(
        'Valores de "page" e "limit" devem ser maiores que zero.',
      );
    }

    const findUsers = await this.listAllUsers.execute();

    // // Cálculo do índice inicial e final para a paginação
    // const startIndex = (page - 1) * limit;
    // const endIndex = startIndex + limit;

    // // Selecionar os usuários da página atual
    // const users = allUsers.slice(startIndex, endIndex);

    // const count = allUsers.length;

    // // Calcular o total de páginas arredondando para cima
    // const totalPage = Math.ceil(count / limit);

    const result = this.paginationService.paginate(findUsers, page, limit);

    return result;
  }
}

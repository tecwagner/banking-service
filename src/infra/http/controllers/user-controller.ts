import { CreatedUser } from '@domain/usecase/createUser/created-user';
import { CreateUserBody } from '@infra/dto/create-users-body';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserViewModel } from '../view-models/users-views-model';
import { ListAllUsers } from '@domain/usecase/listAllUser/listAll-user';
import { Users } from '@domain/entity/user';

@Controller('users')
export class UserController {
  constructor(
    private createdUser: CreatedUser,
    private listAllUsers: ListAllUsers,
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

    console.log('controller', user);

    const viewFront = UserViewModel.toHTTP(user);

    return { viewFront };
  }

  @Get('listAllUsers')
  async getFromUsers(): Promise<Users[]> {
    const users = await this.listAllUsers.execute();
    return users;
  }
}

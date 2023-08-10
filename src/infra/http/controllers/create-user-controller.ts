// import { Account } from '@domain/entity/user_account';
import { Account } from '@domain/entity/user_account';
import { CreatedUser } from '@domain/usecase/createUser/created-user';
import { CreateUserBody } from '@infra/dto/create-users-body';
import { Body, Controller, Post } from '@nestjs/common';
import { UserViewModel } from '../view-models/users-views-model';

@Controller('users')
export class UserController {
  constructor(private createdUser: CreatedUser) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { fullname, role, cpf, cnpj, email, password } = body;

    const { user } = await this.createdUser.execute({
      fullname,
      role,
      cpf,
      account: new Account(),
      cnpj,
      email,
      password,
    });

    const viewFront = UserViewModel.toHTTP(user);
    console.log('controller', viewFront);

    return { viewFront };
  }
}

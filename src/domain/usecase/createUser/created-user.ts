import { Injectable } from '@nestjs/common';
import { Users } from '../../entity/user';
import { Account } from '../../entity/user_account';
import { UsersRepository } from '../../repositories/users-repository';

interface IAccountUser {
  wallet: number;
  accountNumber: number;
  accountDigit: number;
}

interface ICreatedUserRequest {
  fullname: string;
  role: string;
  account: IAccountUser;
  cpf: string;
  cnpj: string;
  email: string;
  password: string;
}

interface ICreatedUserResponse {
  user: Users;
}
@Injectable()
export class CreatedUser {
  constructor(private usersRepositoriy: UsersRepository) {}

  async execute(request: ICreatedUserRequest): Promise<ICreatedUserResponse> {
    const { fullname, role, cpf, cnpj, email, password } = request;

    const user = new Users({
      fullname,
      role,
      account: new Account(),
      cpf,
      cnpj,
      email,
      password,
    });

    console.log('useCase', user);
    await this.usersRepositoriy.create(user);

    return { user };
  }
}

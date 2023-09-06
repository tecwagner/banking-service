import { Injectable } from '@nestjs/common';
import { Users } from '../../../domain/users/entity/user';
import { UsersRepository } from '../../../domain/users/respository/users-repository';

interface ICreatedUserRequest {
  fullname: string;
  role: string;
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
      cpf,
      cnpj,
      email,
      password,
    });

    await this.usersRepositoriy.create(user);

    return { user };
  }
}

import { Injectable } from '@nestjs/common';
import { Users } from '../../entity/user';
import { UsersRepository } from '../../repositories/users-repository';

@Injectable()
export class ListAllUsers {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<Users[]> {
    const users = await this.usersRepository.listAll();
    if (!users) {
      throw new Error('Lista de usuários vazia!');
    }
    return users;
  }
}

import { Injectable } from '@nestjs/common';
import { Users } from '../../../domain/users/entity/user';
import { UsersRepository } from '../../../domain/users/respository/users-repository';

@Injectable()
export class FindAllUsers {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<Users[]> {
    const users = await this.usersRepository.findAll();
    if (!users) {
      throw new Error('Lista de usuários vazia!');
    }
    return users;
  }
}

import { Users } from '@domain/users/entity/user';
import { UsersRepository } from '@domain/users/respository/users-repository';

//Criando um repository feak
export class InMemoryUsersRepository implements UsersRepository {
  //Criando um array simbolico para o teste
  public users: Users[] = [];

  async create(user: Users) {
    // console.log('users:', user);
    this.users.push(user);
  }

  async findAll(): Promise<Users[]> {
    const users = await this.users;
    // console.log('memory', users);
    return users;
  }
}

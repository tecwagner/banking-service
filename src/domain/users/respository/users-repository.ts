import { Users } from '../entity/user';

export abstract class UsersRepository {
  abstract create(entity: Users): Promise<void>;
  abstract findAll(): Promise<Users[]>;
  // abstract findOne(entity: Users): Promise<Users>;
}

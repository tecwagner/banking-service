import { Users } from '../entity/user';

export abstract class UsersRepository {
  abstract create(users: Users): Promise<void>;
}

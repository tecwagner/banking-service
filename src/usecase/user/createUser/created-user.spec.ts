import { CreatedUser } from './created-user';
import { InMemoryUsersRepository } from '../../../../test/repositories/in-memory-users-repository';

describe('Test Create User in memory repository', () => {
  it('should be able to created a users', async () => {
    const usersMemoryRepository = new InMemoryUsersRepository();
    const createUser = new CreatedUser(usersMemoryRepository);

    const { user } = await createUser.execute({
      fullname: 'Wagner Oliveira Rodrigues',
      role: 'Customer',
      cpf: '12345678995',
      cnpj: '123456789865',
      email: 'wagner@gmail.com',
      password: '4321',
    });

    expect(usersMemoryRepository.users).toHaveLength(1);
    expect(usersMemoryRepository.users[0]).toEqual(user);
  });
});

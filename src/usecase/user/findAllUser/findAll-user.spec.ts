// import { Account } from '../../entity/user_account';
import { InMemoryUsersRepository } from '../../../../test/repositories/in-memory-users-repository';
import { FindAllUsers } from './findAll.user';
import { makeUser } from '../../../../test/factories/user-factory';

describe('Test Create User in memory repository', () => {
  it('should be able to created a users', async () => {
    const usersMemoryRepository = new InMemoryUsersRepository();
    const listAll = new FindAllUsers(usersMemoryRepository);

    await usersMemoryRepository.create(
      makeUser({
        fullname: 'Wagner Oliveira Rodrigues',
        role: 'Customer',
        cpf: '12345678995',
        cnpj: '',
        email: 'wagner@gmail.com',
        password: '4321',
      }),
    );

    await usersMemoryRepository.create(
      makeUser({
        fullname: 'Amanda Daniele Silva',
        role: 'Shopkeeper',
        cpf: '',
        cnpj: '123456789954334',
        email: 'wagner@gmail.com',
        password: '4321',
      }),
    );

    await listAll.execute();

    const users = await usersMemoryRepository.findAll();

    expect(users).toHaveLength(2);
  });
});

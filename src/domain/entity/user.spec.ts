import { randomUUID } from 'crypto';
import { Users } from './user';

const user = new Users({
  id: randomUUID(),
  fullname: 'Wagner Oliveira Rodrigues',
  role: 'Customer',
  cpf: '12345678995',
  cnpj: '123456789865',
  email: 'wagner@gmail.com',
  password: '4321',
  createdAt: new Date(),
});

describe('Usser test unit', () => {
  it('should be able to create a user', () => {
    console.log('Creating a user', user);
    expect(user).toBeTruthy();
  });

  it('should have method to get', () => {
    expect(user.getId()).toBeDefined();
    expect(user.getFullname()).toBe('Wagner Oliveira Rodrigues');
    expect(user.getRole()).toBe('Customer');
    expect(user.getCpf()).toBe('12345678995');
    expect(user.getCnpj()).toBe('123456789865');
    expect(user.getEmail()).toBe('wagner@gmail.com');
    expect(user.getPassword()).toBe('4321');
    expect(user.getCreatedAt()).toBeTruthy();
  });
});

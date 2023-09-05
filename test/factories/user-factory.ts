import { IUserProps, Users } from '../../src/domain/entity/user';

type Override = Partial<IUserProps>;

export function makeUser(override: Override = {}) {
  return new Users({
    fullname: 'Wagner Oliveira Rodrigues',
    role: 'Customer',
    cpf: '12345678995',
    cnpj: '',
    email: 'wagner@gmail.com',
    password: '4321',
    wallet: 0,
    accountNumber: Math.floor(Math.random() * 999999),
    accountDigit: Math.floor(Math.random() * 99),
    ...override,
  });
}

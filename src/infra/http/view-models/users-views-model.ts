import { Users } from '@domain/entity/user';

export class UserViewModel {
  static toHTTP(users: Users) {
    return {
      fullname: users.getFullname(),
      role: users.getRole(),
      cpf: users.getCpf(),
      cnpj: users.getCnpj(),
      email: users.getEmail(),
      password: users.getPassword(),
    };
  }
}

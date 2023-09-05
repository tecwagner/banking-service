import { Users } from '@domain/entity/user';
import { User as RowUsers } from '@prisma/client';

export class PrismaMapperUser {
  static toPrisma(users: Users) {
    return {
      fullname: users.getFullname(),
      role: users.getRole(),
      cpf: users.getCpf(),
      cnpj: users.getCnpj(),
      email: users.getEmail(),
      password: users.getPassword(),
      wallet: users.accountWallet(),
      accountNumber: users.accountNumber(),
      accountDigit: users.accountDigit(),
      createdAt: users.getCreatedAt(),
    };
  }

  static toDomain(row: RowUsers): Users {
    return new Users({
      id: row.id,
      fullname: row.fullname,
      role: row.role,
      cpf: row.cpf,
      cnpj: row.cnpj,
      email: row.email,
      password: row.password,
      wallet: row.wallet,
      accountNumber: row.accountNumber,
      accountDigit: row.accountDigit,
      createdAt: row.createdAt,
    });
  }
}

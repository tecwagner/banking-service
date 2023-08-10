import { Users } from '@domain/entity/user';
import { UsersRepository } from '@domain/repositories/users-repository';
import { PrismaService } from '@infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaMapperUser } from '../mapper/prisma-mappers-users';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async create(users: Users): Promise<void> {
    const row = PrismaMapperUser.toPrisma(users);
    console.log('row:', row);

    await this.prismaService.user.create({ data: row });
  }
}

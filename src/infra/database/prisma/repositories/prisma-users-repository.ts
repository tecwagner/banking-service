import { Users } from '@domain/users/entity/user';
import { UsersRepository } from '@domain/users/respository/users-repository';
import { PrismaService } from '@infra/database/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaMapperUser } from '../mapper/prisma-mappers-users';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async create(users: Users): Promise<void> {
    try {
      const existingUser = await this.prismaService.user.findFirst({
        where: {
          OR: [{ email: users.getEmail() }, { cnpj: users.getCnpj() }],
        },
      });

      if (existingUser) {
        throw new HttpException('Invalid users', HttpStatus.BAD_REQUEST);
      }
      const row = PrismaMapperUser.toPrisma(users);

      await this.prismaService.user.create({ data: row });

      throw new HttpException('User created successfully ', HttpStatus.CREATED);
    } finally {
      await this.prismaService.$disconnect();
    }
  }

  async findAll(): Promise<Users[]> {
    const users = await this.prismaService.user.findMany({
      orderBy: { createdAt: 'desc' },
    });

    users.map((user) => delete user.password);

    return users.map(PrismaMapperUser.toDomain);
  }
}

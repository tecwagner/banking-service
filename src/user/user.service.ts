import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/infra/database/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const userExists = await this.prisma.user.findFirst({
      where: { email: data.email },
    });

    if (userExists) {
      throw new HttpException(
        'Já existe usuário cadastrado com estes dados',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.prisma.user.create({ data });

    throw new HttpException('Usuário criado com sucesso!', HttpStatus.CREATED);
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findByUuid(uuid: string) {
    const userId = await this.prisma.user.findFirst({
      where: { id: uuid },
    });
    if (!userId) {
      throw new HttpException('Usuário não encontrado', HttpStatus.BAD_REQUEST);
    }

    delete userId.password;

    return userId;
  }

  async update(uuid: string, data: UpdateUserDto) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        id: uuid,
      },
    });
    if (!userExists) {
      throw new HttpException('Usuário não existe.', HttpStatus.BAD_REQUEST);
    }

    await this.prisma.user.update({
      data,
      where: {
        id: uuid,
      },
    });
    throw new HttpException(
      'Dados cadastrais do Usuário alterado.',
      HttpStatus.OK,
    );
  }

  async remove(uuid: string) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        id: uuid,
      },
    });
    if (!userExists) {
      throw new HttpException('Usuário não existe.', HttpStatus.BAD_REQUEST);
    }

    await this.prisma.user.delete({
      where: {
        id: uuid,
      },
    });
    throw new HttpException('Usuário removido!.', HttpStatus.OK);
  }
}

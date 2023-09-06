import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/prisma/database.module';
import { UserController } from './http/controllers/user-controller';
import { CreatedUser } from '@domain/usecase/createUser/created-user';
import { ListAllUsers } from '@domain/usecase/listAllUser/listAll-user';
import { PaginationService } from 'src/common/pagination/paginationService';

@Module({
  imports: [DataBaseModule],
  controllers: [UserController],
  providers: [CreatedUser, ListAllUsers, PaginationService],
})
export class HttpModule {}

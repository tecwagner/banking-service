import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/prisma/database.module';
import { UserController } from './http/controllers/user-controller';

import { FindAllUsers } from 'src/usecase/user/findAllUser/findAll.user';
import { PaginationService } from 'src/common/pagination/paginationService';
import { CreatedUser } from '@usecase/user/createUser/created-user';

@Module({
  imports: [DataBaseModule],
  controllers: [UserController],
  providers: [CreatedUser, FindAllUsers, PaginationService],
})
export class HttpModule {}

import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/prisma/database.module';
import { UserController } from './http/controllers/create-user-controller';
import { CreatedUser } from '@domain/usecase/createUser/created-user';

@Module({
  imports: [DataBaseModule],
  controllers: [UserController],
  providers: [CreatedUser],
})
export class HttpModule {}

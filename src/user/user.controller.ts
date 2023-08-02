import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.create(body);
  }

  @Get()
  findAll() {
    console.log('todos');
    return this.userService.findAll();
  }

  @Get(':id')
  findByUuid(@Param('id') id: string) {
    return this.userService.findByUuid(id);
  }

  @Patch(':id')
  update(@Param('id') uuid: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(uuid, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') uuid: string) {
    return this.userService.remove(uuid);
  }
}

import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { User } from '../models/user.entity';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async insert(@Body() user: User): Promise<void> {
    this.userService.insert(user);
  }
}

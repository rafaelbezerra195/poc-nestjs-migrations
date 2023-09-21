import { Inject, Injectable } from '@nestjs/common';
import { configuration } from 'src/config/configuration';
import { Repository } from 'typeorm';
import { User } from '../models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(configuration.users.repository)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}

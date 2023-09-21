import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './providers/user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService],
})
export class UsersModule {}

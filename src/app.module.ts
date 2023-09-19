import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModuleModule } from './database-module/database-module.module';
import { DatabaseProviders } from './database-module/database-providers/database-providers';

@Module({
  imports: [DatabaseModuleModule],
  controllers: [AppController],
  providers: [AppService, DatabaseProviders],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModuleModule } from './database-module/database-module.module';
import { DatabaseModuleDatabaseProviders } from './database-module.database-providers/database-module.database-providers';

@Module({
  imports: [DatabaseModuleModule],
  controllers: [AppController],
  providers: [AppService, DatabaseModuleDatabaseProviders],
})
export class AppModule {}

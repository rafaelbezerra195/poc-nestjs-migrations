import { DataSourceOptions } from 'typeorm';
import { configuration } from './configuration';

export const databaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: configuration.database.rootUsername,
  password: configuration.database.rootPassword,
  database: 'db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  //migrations: ['./migrations/*.ts'],
};
